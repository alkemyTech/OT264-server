const app = require('../app');
const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { Contacts } = require('../models');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest')(app);
const expect = chai.expect;
const baseUrl = '/contacts';

describe('Se testean los endpoint - caso feliz', () => {
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
      const response = await request.get(baseUrl).send(contacts);
      expect(response.status).to.be.equal(200);
    });
  });

  describe('POST /contacts', () => {
    it('return insert a contact should succeed', async () => {
      const response = await request.post(baseUrl).send({
        id: 1,
        name: 'contact1',
        phone: '1234567891',
        email: 'contact1@email.com',
        message: 'mensaje contacto 1'
      });
      expect(response.status).to.eql(200);
    });
  });
  describe('POST /contacts', () => {
    it('Return insert a contact should fail validation fields', async () => {
      const response = await request.post(baseUrl).send({
        id: 1,
        name: 123,
        phone: '1234567891',
        email: '',
        message: 'mensaje contacto 1'
      });
      expect(response.status).to.eql(400);
    });
  });
});
describe('Solicitar error en caso no feliz', () => {
  const sandbox = sinon.createSandbox();
  before(() => {
    sandbox.stub(JwtUtils, 'verifyToken').resolves({
      email: 'anEmailValidated@test.com'
    });
    sandbox.stub(UserController, 'getByEmail').resolves({
      roleId: 2
    });
  });
  after(() => {
    sinon.restore();
    sandbox.restore();
  });

  describe('GET /contacts', () => {
    it('Return get all contacts should fail  without credentials', async () => {
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
      expect(response.status).to.be.equal(401);
    });
  });
  describe('POST /contacts', () => {
    it('Return insert a contact should fail with rol user', async () => {
      const response = await request.post(baseUrl).send({
        id: 1,
        name: 'contact1',
        phone: '1234567891',
        email: 'contact1@email.com',
        message: 'mensaje contacto 1'
      });
      expect(response.status).to.eql(401);
    });
  });
});
