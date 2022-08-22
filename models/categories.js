'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      // define association here
    }
  }
  Categories.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'categories',
      paranoid: true
    }
  );
  return categories;
};
