'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {timestamps: false});
  User.associate = function(models) {
    // When a User is deleted, also delete any associated comments
    User.hasMany(models.Comment, {
      onDelete: "cascade"
    });
    User.hasMany(models.Project, {
      onDelete: "cascade"
    });
    User.hasMany(models.Vote, {
      onDelete: "cascade"
    });
  };
  return User;
};
