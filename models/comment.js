'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.New, { foreignKey: 'newId' });
    }
  }
  Comment.init(
    {
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER
      },
      body: DataTypes.TEXT,
      newId: {
        field: 'new_id',
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      paranoid: true
    }
  );
  return Comment;
};
