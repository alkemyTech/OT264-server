const { Comment } = require('../models');
const responseStatusHTTP = require('../utils/responseHTTP');
class CommentsController {
  static async getAll(req, res) {
    try {
      const comments = await Comment.findAll({
        attributes: ['body'],
        order: [['createdAt', 'ASC']]
      });
      res.status(200).json(comments);
    } catch (error) {
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async create(req, res) {
    const { userId, body, newId } = req.body;
    const data = { userId, body, newId };
    let newComment;
    try {
      newComment = await Comment.create(data);
    } catch (err) {
      return res.status(500).send({ msg: 'Internal Server error' });
    }
    res.status(200).send(newComment);
  }

  static async deleteComment(req, res) {
    const { id } = req.params;
    var deleteComment = {};
    try {
      deleteComment = await Comment.destroy({ where: { id } });
    } catch (error) {
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }
    if (deleteComment) {
      return res.status(responseStatusHTTP.Ok).send({ msg: 'The comment was deleted' });
    } else {
      return res.status(responseStatusHTTP.Not_Found).json({ msg: 'The comment is not found in the database' });
    }
  }
  static async updateComment(req, res) {
    const { id } = req.params;
    const data = req.body;
    let comment;
    try {
      comment = await Comment.update({ ...data }, { where: { id } });
    } catch (error) {
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }
    if (comment) {
      return res.status(responseStatusHTTP.Ok).send({ msg: 'The comment updated successfully' });
    } else {
      return res.status(responseStatusHTTP.Not_Found).json({ msg: 'The comment is not found in the database' });
    }
  }
}

module.exports = CommentsController;
