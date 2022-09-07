'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {
      // define association here
    }
  }
  Member.init(
    {
      name: DataTypes.STRING,
      facebookUrl: DataTypes.STRING,
      instagramUrl: DataTypes.STRING,
      linkedinUrl: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Member',
      paranoid: true
    }
  );
  return Member;
};
