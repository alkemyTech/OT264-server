const app = require('../app');
const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { Organization } = require('../models');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest')(app);
const expect = chai.expect;
const baseUrl = '/organization/public';

describe('Organization test', () => {
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
  const organization = {
    id: 1,
    name: 'ONG',
    image: 'this is image',
    addres: 'this is address',
    phone: 123456,
    email: 'test@test.com',
    welcomeText: 'this is welcome text',
    aboutUsText: 'this is about us text'
  };
  describe('Get all Organization', () => {
    it('It should get all Organization', async () => {
      const organization = [
        {
          id: 1,
          name: 'ONG',
          image: 'this is image',
          addres: 'this is address',
          phone: 123456,
          email: 'test@test.com',
          welcomeText: 'this is welcome text',
          aboutUsText: 'this is about us text'
        },
        {
          id: 2,
          name: 'ONG',
          image: 'this is image',
          addres: 'this is address',
          phone: 123456,
          email: 'test@test.com',
          welcomeText: 'this is welcome text',
          aboutUsText: 'this is about us text'
        },
        {
          id: 3,
          name: 'ONG',
          image: 'this is image',
          addres: 'this is address',
          phone: 123456,
          email: 'test@test.com',
          welcomeText: 'this is welcome text',
          aboutUsText: 'this is about us text'
        }
      ];
      sandbox.stub(Organization, 'findAll').resolves(organization);
      const response = await request.get(baseUrl).send(organization);
      expect(response.status).to.be.equal(200);
    });
  });

  describe('Put Organization', () => {
    it('It should updateOrganization', async () => {
      const updateOrganization = {
        id: 1,
        name: 'ONG-Update',
        image: 'this is image - Update',
        addres: 'this is address - Update',
        phone: 1234567,
        email: 'test@test.com - Update',
        welcomeText: 'this is welcome text - Update',
        aboutUsText: 'this is about us text - Update'
      };
      const reqParamsOrganizationId = 1;
      sandbox.stub(Organization, 'update').resolves(organization);

      const response = await request.post(baseUrl).send(organization);

      expect(reqParamsOrganizationId).to.be.deep.equal(updateOrganization.id);
      expect(organization.id).to.be.deep.equal(updateOrganization.id);
      expect(updateOrganization).to.be.a('object');
      expect(updateOrganization).to.have.property('id');
      expect(updateOrganization).to.have.property('name');
      expect(updateOrganization).to.have.property('image');
      expect(updateOrganization).to.have.property('addres');
      expect(updateOrganization).to.have.property('phone');
      expect(updateOrganization).to.have.property('email');
      expect(updateOrganization).to.have.property('welcomeText');
      expect(updateOrganization).to.have.property('aboutUsText');
      expect(response.status).to.be.equal(200);
    });
  });
});
