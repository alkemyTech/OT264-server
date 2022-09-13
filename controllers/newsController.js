const { New, Categories } = require('../models');
const { NotFound } = require('../utils/error');
const ApiUtils = require('../utils/apiUtils');

class NewsController {
  static async getAll(req, res) {
    const baseUrl = await ApiUtils.getBaseUrl(req);
    let { page } = req.query;

    const options = {};
    let pages = {};

    if (page) {
      page = parseInt(page, 10);
      options.limit = 10;
      options.offset = (page - 1) * 10;
    }

    let news;
    try {
      news = await New.findAndCountAll(options);
    } catch (err) {
      res.status(500).send({ msg: 'Internal Server error', error: err.message });
    }

    if (page) {
      pages = await ApiUtils.getPagination(baseUrl, page, news.count);
    }

    res.status(200).send({ msg: 'Lista de novedades', ...pages, news: news.rows });
  }

  static async create(req, res) {
    const data = req.body;
    const { categoriesId } = data;
    try {
      const category = await Categories.findOne({ where: { id: categoriesId } });
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
  static async getById(req, res) {
    const { id } = req.params;
    let news = undefined;
    try {
      news = await New.findByPk(id);
      if (news) {
        return res.status(200).json(news);
      } else {
        return res.status(404).json({ msg: 'News not found' });
      }
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
  }

  static async deleteNew(req, res) {
    const news = await New.destroy({ where: { id: req.params.id } });
    if (news) {
      return res.status(200).send({ msg: 'Deleted new' });
    }
    return res.send(new NotFound());
  }
  static async updateNews(req, res) {
    const { id } = req.params;
    const data = req.body;
    try {
      const newsUpdated = await New.findOne({ where: { id } });
      if (newsUpdated) {
        await New.update({ ...data }, { where: { id } });
        const newsUpdated = await New.findOne({ where: { id } });
        return res.status(200).json(newsUpdated);
      } else {
        return res.status(404).json({ msg: 'News not found' });
      }
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}
module.exports = NewsController;
