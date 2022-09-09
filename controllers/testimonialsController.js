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
  static async getAllTestimonials(req, res) {
    const limit = 10;
    const { page } = req.query;
    const totalTestimonials = await Testimonial.findAll();
    const testimonialsLength = totalTestimonials.length;
    const totalPages = Math.ceil(testimonialsLength / limit);
    let nextPage = `http://localhost:3000/testimonials?page=${Number(page) + 1}`;
    page < totalPages ? Number(page) + 1 : (nextPage = undefined);
    let previousPage = `http://localhost:3000/testimonials?page=${page - 1}`;
    page > 1 ? page - 1 : (previousPage = undefined);
    try {
      const testimonials = await Testimonial.findAll({
        limit: limit,
        offset: (page - 1) * limit
      });
      res.status(200).json({
        testimonials,
        previousPage,
        nextPage
      });
    } catch (err) {
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
}

module.exports = TestimonialController;
