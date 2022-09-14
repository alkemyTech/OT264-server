const { Member } = require('../models');
const { NotFound } = require('../utils/error');
const ApiUtils = require('../utils/apiUtils');
const responseStatusHTTP = require('../utils/responseHTTP');
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
    const baseUrl = await ApiUtils.getBaseUrl(req);
    let { page } = req.query;
    const options = {};
    let pages = {};

    if (page) {
      page = parseInt(page, 10);
      options.limit = 10;
      options.offset = (page - 1) * 10;
    }

    let members;
    try {
      members = await Member.findAndCountAll(options);
    } catch (err) {
      return res
        .status(responseStatusHTTP.Internal_Server_Error)
        .send({ msg: 'Internal Server error', error: err.message });
    }

    if (page) {
      pages = await ApiUtils.getPagination(baseUrl, page, members.count);
    }

    res.status(responseStatusHTTP.Ok).send({ msg: 'Lista de miembros', members: members.rows, ...pages });
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
