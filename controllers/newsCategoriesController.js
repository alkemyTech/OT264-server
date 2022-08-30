const { Categories } = require('../models');
const { NotFound } = require('../utils/error');

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
  static async show(req, res) {
    try {
      const showCategories = await Categories.findAll();
      res.status(200).json(showCategories);
    } catch (error) {
      res.status(404).send('Ah ocurrido un error');
      //throw new NotFound();
    }
  }
}
module.exports = NewsCategoriesController;
