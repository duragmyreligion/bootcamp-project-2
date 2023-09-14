const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
// Prevents non logged in users frojm logging in
router.get('/', withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({
      include: [
        {
            model: User,
            attributes: ['name']
        }
      ]
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      projects,
      // TODO: Add a comment describing the functionality of this property
      // Requires to see if logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/project/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id,{
      include: [
        {
            model: User,
            attributes: ['name']
        }
      ]
    });

    const projects = projectData.get({ plain: true });

    res.render('project', {
      ...projects,
      // TODO: Add a comment describing the functionality of this property
      // Requires to see if logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id,{
      attributes: { exlude: ['password'] },
      include: [ { model: Project }]
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // When logged in redirects to main page.
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
