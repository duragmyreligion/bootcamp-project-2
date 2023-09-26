const sequelize = require('../config/connection');
const { User, Forum, Comment } = require('../models');

const userData = require('./userData.json');
const forumData = require('./forumData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const forum of forumData) {
    await Forum.create({
      ...forum,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const comment of commentData) {
    await Comment.create({
    ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
