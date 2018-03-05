'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Project);
    Comment.belongsTo(models.User);
  }
  return Comment;
};