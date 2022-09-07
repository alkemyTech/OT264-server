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
  static async updateActivities(req, res) {
    const { id } = req.params;
    const { name, content, image } = req.body;
    let activitiesUpdated = {};

    try {
      activitiesUpdated = await Activities.findByPk(id);
      activitiesUpdated.name = name;
      activitiesUpdated.content = content;
      activitiesUpdated.image = image;
    } catch (error) {
      return res.status(404).json({ msg: 'Activities not found' });
    }

    try {
      await activitiesUpdated.save();
      return res.status(200).json(activitiesUpdated);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}

module.exports = ActivitiesController;
