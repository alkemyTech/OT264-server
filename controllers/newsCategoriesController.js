const {Categories} = require('../models')

class NewsCategoriesController {
  static async deleteCategories(req, res) {
    const { id } = req.params;
    try {
      const categories = await Categories.destroy({where:{id}});

      if (categories) {
        console.log(categories.name)
        return res.status(200).send({ msg: `Categoria eliminada` });
      }
      return res.status(404).send({ msg: `La categoria no existe` });

    } catch (error) {
      console.log(error)
      res.status(404).json({ msg: 'Ah ocurrido un error' });
    }
  }
}
module.exports = NewsCategoriesController;
