'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    static associate(models) {}
  }
  Contacts.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      message: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Contacts',
      paranoid: true
    }
  );
  return Contacts;
};
