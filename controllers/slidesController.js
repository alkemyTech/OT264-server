const { Slide } = require('../models');

class SlidesController {
  static async updateSlides(req, res) {
    const id = 1;
    const data = req.body;
    try {
      await Slide.update({ ...data }, { where: { id } });
      res.status(200).send('Slide actualizada');
    } catch (error) {
      console.log(error);
      res.status(404).send('An error has occurred');
    }
  }

  static async getById(req, res) {
    const { id } = req.params;
    let slide;
    try {
      slide = await Slide.findByPk(id);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
    if (slide) {
      return res.status(200).json(slide);
    } else {
      return res.status(404).json({ msg: 'Slide not found' });
    }
  }

  static async getAll(req, res) {
    try {
      const slides = await Slide.findAll({ attributes: [['imageUrl', 'miniatura'], 'order'] });
      res.status(200).json(slides);
    } catch (error) {
      res.status(404).send('Ah ocurrido un error');
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteSlide = await Slide.destroy({ where: { id } });
      if (deleteSlide) {
        return res.status(200).send({ msg: `El Slide fue eliminado`, deleteSlide });
      }
      return res.status(400).json({ msg: 'Slide inexistiente' });
    } catch (error) {
      res.status(404).json({ msg: 'Ah ocurrido un error' });
    }
  }
}

module.exports = SlidesController;
