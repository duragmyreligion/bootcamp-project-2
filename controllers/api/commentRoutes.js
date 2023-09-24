// const router = require('express').Router();
// const { Comments } = require('../../models');

// router.post('/', async (req, res) => {
//   try {
//     const newComments = await Comments.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newComments);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const forumData = await Comments.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!forumData) {
//       res.status(404).json({ message: 'No forum post found with this id!' });
//       return;
//     }

//     res.status(200).json(forumData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// module.exports = router;

// const router = require('express').Router();
// const { Comment } = require('../models');
// const withAuth = require('../utils/auth');

// // Route to create a new comment
// router.post('/', withAuth, async (req, res) => {
//   try {
//     // Ensure that required comment data is present in req.body
//     const { text, forum_id } = req.body;

//     if (!text || !forum_id) {
//       return res.status(400).json({ error: 'Text and forum_id are required fields.' });
//     }

//     // Create a new comment with user_id from the session
//     const newComment = await Comment.create({
//       text,
//       forum_id,
//       user_id: req.session.user_id,
//     });

//     // Send a success response or redirect as needed
//     res.status(201).json(newComment); // Assuming you want to send the created comment back
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to create a new comment.' });
//   }
// });
