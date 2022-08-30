const { Categories } = require('../models');

class NewsCategoriesController {
  static async create(req, res) {
    const data = req.body;
    try {
      const newCategory = await Categories.create(data);
      res.status(200).send(newCategory);
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}
module.exports = NewsCategoriesController;
