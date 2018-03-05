'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vote = sequelize.define('Vote', {
    vote_choice: DataTypes.BOOLEAN
  }, {});
  Vote.associate = function(models) {
    Vote.belongsTo(models.Project);
    Vote.belongsTo(models.User);
  };
  return Vote;
};