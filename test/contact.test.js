const app = require('../app');
const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { Contacts } = require('../models');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest')(app);
const expect = chai.expect;
const baseUrl = '/contacts';

describe('Contact endpoint test', () => {
  const sandbox = sinon.createSandbox();
  before(() => {
    sandbox.stub(JwtUtils, 'verifyToken').resolves({
      email: 'anEmailValidated@test.com'
    });
    sandbox.stub(UserController, 'getByEmail').resolves({
      roleId: 1
    });
  });
  after(() => {
    sinon.restore();
    sandbox.restore();
  });

  const contact = {
    id: 1,
    name: 'contact1',
    phone: '1234567891',
    email: 'contact1@email.com',
    message: 'mensaje contacto 1'
  };

  describe('GET /contacts', () => {
    it('It should get all contacts', async () => {
      const contacts = [
        {
          id: 1,
          name: 'contact1',
          phone: '1234567891',
          email: 'contact1@email.com',
          message: 'mensaje contacto 1'
        },
        {
          id: 2,
          name: 'contact2',
          phone: '1234567892',
          email: 'contact2@email.com',
          message: 'mensaje contacto 2'
        }
      ];
      sandbox.stub(Contacts, 'findAll').resolves(contacts);
      const response = await request.get(baseUrl);
      expect(response.status).to.be.equal(200);
      expect(response.body.contacts);
    });
  });

  describe('POST /contacts', () => {
    it('return insert a contact should succeed', async () => {
      sandbox.stub(Contacts, 'create').resolves(contact);
      const response = await request.post(baseUrl).send(contact);
      const newContact = response.body;
      expect(newContact).to.be.a('object');
      expect(newContact).to.have.property('name');
      expect(newContact).to.have.property('phone');
      expect(newContact).to.have.property('email');
      expect(newContact).to.have.property('message');
      expect(response.status).to.be.equal(200);
      expect(contact).to.be.deep.equal(newContact);
    });
  });
});
