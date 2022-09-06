const { Organization, Slide } = require('../models');

class OrganizationController {
  static async getAll(req, res) {
    try {
      const organization = await Organization.findAll({
        attributes: ['name', 'image', 'phone', 'address']
      });
      const slides = await Slide.findAll({
        attributes: ['imageUrl', 'order']
      });
      const orderedSlides = slides.sort((a, b) => a.order - b.order);
      res.status(200).json([organization, orderedSlides]);
    } catch (error) {
      res.status(404).send('Ha ocurrido un error');
    }
  }
  static async updateOrganization(req, res) {
    const id = 1;
    const data = req.body;
    try {
      await Organization.update({ ...data }, { where: { id } });
      res.status(200).send('Organización actualizada');
    } catch (error) {
      console.log(error);
      res.status(404).send('Ha ocurrido un error');
    }
  }
}

module.exports = OrganizationController;
