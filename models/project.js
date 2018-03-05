'use strict';
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    category: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    project_img: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    Project.belongsTo(models.User);
    Project.hasMany(models.Comment, {
      as: "project_comments"
    });
  };
  return Project;
};