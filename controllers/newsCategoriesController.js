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
  static async deleteCategories(req, res) {
    const { id } = req.params;
    try {
      const categories = await Categories.destroy({ where: { id } });

      if (categories) {
        return res.status(200).send({ msg: 'Deleted category' });
      }
      return res.status(404).send({ msg: 'Categorie not found' });
    } catch (error) {
      res.status(404).json({ msg: 'An error has occurred' });
    }
  }

  static async updateCategory(req, res) {
    const { id } = req.params;
    const data = req.body;
    let category;

    try {
      category = await Categories.findOne({ where: { id } });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ msg: 'Internal server error' });
    }

    if (!category) {
      return res.status(400).send({ msg: 'Category not found' });
    }

    try {
      await Categories.update(data, { where: { id } });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ msg: 'Internal server error' });
    }

    return res.status(200).send({ msg: 'Category updated' });
  }
  static async show(req, res) {
    const { id } = req.params;
    try {
      const showCategories = await Categories.findOne({ where: { id } });
      if (showCategories) {
        res.status(200).json(showCategories);
      }
    } catch (error) {
      return res.send(new NotFound());
    }
  }
}
module.exports = NewsCategoriesController;
