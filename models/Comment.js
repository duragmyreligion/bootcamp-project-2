const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}
Comment.init(
  {
    comments: {
      type: DataTypes.STRING,
     },
    //  newComment: {
    //   type: DataTypes.STRING,
    //  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);
module.exports = Comment;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Comment extends Model {}

// Comment.init(
//   {
//     text: { 
//       type: DataTypes.STRING,
//       allowNull: false, 
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'comment',
//   }
// );

// module.exports = Comment;
