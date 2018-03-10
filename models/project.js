"use strict";
module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    about: DataTypes.STRING,
    category: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    username: DataTypes.STRING,
  }, {timestamps: false});
  Project.associate = function(models) {
    Project.belongsTo(models.User,{
      foreignKey: {
        allowNull: false
      }
    });
    Project.hasMany(models.Comment);
  };
  return Project;
};
