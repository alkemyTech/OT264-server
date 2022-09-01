const { Testimonial } = require('../models');

class TestimonialController {
  static async updateTestimonial(req, res) {
    const id = 1;
    const data = req.body;
    try {
      await Testimonial.update({ ...data }, { where: { id } });
      res.status(200).send('Testimonial updated');
    } catch (error) {
      res.status(404).send('An error has occurred');
    }
  }
}

module.exports = TestimonialController;
