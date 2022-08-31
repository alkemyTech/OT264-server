const { New, Categories } = require('../models');

class NewsController {
  static async create(req, res) {
    const data = req.body;
    const { categoryId } = data;
    try {
      const category = await Categories.findOne({ where: { id: categoryId } });
      if (!category) {
        throw new Error('Categoria no existe');
      }
      const newRow = await New.create(data);
      res.status(200).send(newRow);
    } catch (e) {
      console.log(e);
      res.status(500).send({ msg: 'Internal Server error', error: e.message });
    }
  }
}

module.exports = NewsController;
