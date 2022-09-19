const { Testimonial } = require('../models');
const { NotFound } = require('../utils/error');
const ApiUtils = require('../utils/apiUtils');

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
  static async getAll(req, res) {
    const baseUrl = await ApiUtils.getBaseUrl(req);
    let { page } = req.query;

    const options = {};
    let pages = {};

    if (page) {
      page = parseInt(page, 10);
      options.limit = 10;
      options.offset = (page - 1) * 10;
    }

    let testimonials;
    try {
      testimonials = await Testimonial.findAndCountAll(options);
    } catch (err) {
      res.status(500).send({ msg: 'Internal Server error', error: err.message });
    }

    if (page) {
      pages = await ApiUtils.getPagination(baseUrl, page, testimonials.count);
    }

    res.status(200).send({ msg: 'Lista de testimonios', ...pages, testimonials: testimonials.rows });
  }
}

module.exports = TestimonialController;
