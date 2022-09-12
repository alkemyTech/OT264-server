const { Member } = require('../models');
const { NotFound } = require('../utils/error');

class MembersController {
  static async create(req, res) {
    const { name, facebookUrl, instagramUrl, linkedinUrl, image, description } = req.body;
    const data = { name, facebookUrl, instagramUrl, linkedinUrl, image, description };
    let newMember;
    try {
      newMember = await Member.create(data);
    } catch (err) {
      return res.status(500).send({ msg: 'Internal Server error' });
    }
    res.status(200).send(newMember);
  }
  static async deleteMember(req, res) {
    const { id } = req.params;
    try {
      const member = await Member.destroy({ where: { id } });
      if (member) {
        return res.status(200).send({ msg: 'Member deleted' });
      }
      return res.status(404).send({ msg: 'Member not found' });
    } catch (error) {
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
  static async getAll(req, res) {
    try {
      const member = await Member.findAll();
      res.status(200).json(member);
    } catch (error) {
      res.status(500).send({ msg: 'Internal Server error' });
    }
  }
  static async updateMember(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
      const memberExist = await Member.findByPk(id);
      if (memberExist) {
        await Member.update({ ...data }, { where: { id } });
        return res.send('Member updated successfully');
      }
      return res.send(new NotFound());
    } catch (error) {
      return res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}

module.exports = MembersController;
