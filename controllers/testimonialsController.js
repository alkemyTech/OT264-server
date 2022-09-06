const { Testimonial } = require('../models');
const { NotFound } = require('../utils/error');

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
  static async deleteTestimonial(req, res) {
    const testimonial = await Testimonial.destroy({ where: { id: req.params.id } });
    if (testimonial) {
      return res.status(200).send({ msg: 'Deleted Testimonial' });
    }
    return res.send(new NotFound());
  }
}

module.exports = TestimonialController;
