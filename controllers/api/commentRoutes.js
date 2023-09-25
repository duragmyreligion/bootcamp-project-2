const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/blog_post', async (req, res) => {
  try {
    const newComments = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });s

    res.status(200).json(newComments);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/blog_post:id', async (req, res) => {
  try {
    const forumData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!forumData) {
      res.status(404).json({ message: 'No forum post found with this id!' });
      return;
    }

    res.status(200).json(forumData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
