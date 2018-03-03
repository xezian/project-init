'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Project, {
      as: "comment_project",
      constraints: false
    });
  
    Comment.belongsTo(models.User, {
      as: "comment_user",
      constraints: false
    });
  }
  return Comment;
};