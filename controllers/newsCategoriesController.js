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
}
module.exports = NewsCategoriesController;
