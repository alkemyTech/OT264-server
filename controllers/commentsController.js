const { Comment } = require('../models');

class CommentsController {
  static async getAll(req, res) {
    try {
      const comments = await Comment.findAll({
        attributes: ['body'],
        order: [['createdAt', 'ASC']]
      });
      res.json(comments);
    } catch (error) {
      res.status(404).send('Ha ocurrido un error');
    }
  }
}

module.exports = CommentsController;
