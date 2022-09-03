const { Testimonial } = require('../models');

class TestimonialController {
  static async create(req, res) {
    const data = req.body;
    try {
      const newTestimonial = await Testimonial.create(data);
      res.status(200).send(newTestimonial);
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
}

module.exports = TestimonialController;
