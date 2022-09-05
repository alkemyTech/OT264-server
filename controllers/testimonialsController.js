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
