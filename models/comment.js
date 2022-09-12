'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {}
  }
  Comment.init(
    {
      user_Id: DataTypes.INTEGER,
      body: DataTypes.TEXT,
      new_id: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Comment',
      paranoid: true
    }
  );
  return Comment;
};
