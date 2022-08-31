'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      New.belongsTo(models.Categories, { as: 'categories' });
    }
  }
  New.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      categoriesId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'New',
      paranoid: true
    }
  );
  return New;
};
