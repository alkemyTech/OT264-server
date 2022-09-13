const { Categories } = require('../models');
const { paginated } = require('../utils/pagination');
const responseStatusHTTP = require('../utils/responseHTTP');

const LIMIT_PAGE = 10;

class NewsCategoriesController {
  static async create(req, res) {
    const data = req.body;
    try {
      const newCategory = await Categories.create(data);
      res.status(responseStatusHTTP.Ok).send(newCategory);
    } catch (e) {
      console.log(e);
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }
  }
  static async deleteCategories(req, res) {
    const { id } = req.params;
    try {
      const categories = await Categories.destroy({ where: { id } });

      if (categories) {
        return res.status(responseStatusHTTP.Ok).send({ msg: 'Deleted category' });
      }
      return res.status(responseStatusHTTP.Not_Found).send({ msg: 'Categorie not found' });
    } catch (error) {
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }
  }
  static async nameCategories(req, res) {
    try {
      const { page = 1 } = req.query;
      const { results, next, prev } = await paginated(Categories, LIMIT_PAGE, +page, req);
      if (results.length === 0) {
        return res.status(responseStatusHTTP.Not_Found).json({ msg: 'The Categorty is not found in the database' });
      }
      return res.status(responseStatusHTTP.Ok).json({ prev, next, results });
    } catch (err) {
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
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
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }

    if (!category) {
      return res.status(responseStatusHTTP.Not_Found).send({ msg: 'Category not found' });
    }

    try {
      await Categories.update(data, { where: { id } });
    } catch (error) {
      console.log(error);
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }

    return res.status(200).send({ msg: 'Category updated' });
  }
  static async getIdCategory(req, res) {
    const { id } = req.params;
    try {
      const showCategories = await Categories.findOne({ where: { id } });
      if (showCategories) {
        return res.status(responseStatusHTTP.Ok).send(showCategories);
      }
      return res.status(responseStatusHTTP.Not_Found).send({ msg: 'Category not found' });
    } catch (error) {
      res.status(responseStatusHTTP.Internal_Server_Error).json({ msg: 'Internal Server error' });
    }
  }
}
module.exports = NewsCategoriesController;
