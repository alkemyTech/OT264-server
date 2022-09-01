const { Slide } = require('../models');

class SlidesController {
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
}

module.exports = SlidesController;
