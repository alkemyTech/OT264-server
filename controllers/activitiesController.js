const { Activities } = require('../models');

class ActivitiesController {
  static async create(req, res) {
    const data = req.body;
    try {
      const newActivitie = await Activities.create(data);
      res.status(200).send(newActivitie);
    } catch (e) {
      console.log(e);
      res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}

module.exports = ActivitiesController;
