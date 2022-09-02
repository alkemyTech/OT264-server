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
}
module.exports = SlidesController;
