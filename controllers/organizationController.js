const { Organization } = require('../models');

class OrganizationController {
  static async getAll(req, res) {
    try {
      const organization = await Organization.findAll({
        attributes: ['name', 'image', 'phone', 'address']
      });
      res.status(200).json(organization);
    } catch (error) {
      res.status(404).send('respond with a resource');
    }
  }
}

module.exports = OrganizationController;
