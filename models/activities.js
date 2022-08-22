'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    static associate(models) {
      // define association here
    }
  }
  Activities.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Activities',
      paranoid: true
    }
  );
  return Activities;
};
