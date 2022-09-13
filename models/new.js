'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      this.belongsTo(models.Categories, { as: 'categories' });
      this.hasMany(models.Comment, { as: 'comments', foreignKey: 'newId' });
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
