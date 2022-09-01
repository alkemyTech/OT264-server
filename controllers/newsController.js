const { New, Categories } = require('../models');

class NewsController {
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
  static async updateNews(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const newsUpdated = await New.findByPk(id);
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
