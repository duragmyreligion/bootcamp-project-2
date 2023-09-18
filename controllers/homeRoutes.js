const router = require('express').Router();
const { User, Project } = require('../models');
const withAuth = require('../utils/auth');

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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new_post', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id,{
      attributes: { exlude: ['password'] },
      include: [ { model: Project }]
    });

    const user = userData.get({ plain: true });

    res.render('new_post', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
