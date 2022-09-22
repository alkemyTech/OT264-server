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
  beforeEach(() => {
    sandbox.stub(JwtUtils, 'verifyToken').resolves({
      email: 'anEmailValidated@test.com'
    });
    sandbox.stub(UserController, 'getByEmail').resolves({
      roleId: 1
    });
  });
  afterEach(() => {
    sinon.restore();
    sandbox.restore();
  });
  const organization = {
    id: 1,
    name: 'ONG - Modelo',
    image: 'this is image',
    addres: 'this is address',
    phone: 123456,
    email: 'test@test.com',
    welcomeText: 'this is welcome text',
    aboutUsText: 'this is about us text',
    urlFacebook: 'Facebook Organization',
    urlInstagram: 'Instrgram Organization',
    UrlLinkedin: 'Linkedin Organization'
  };
  describe('Get all Organization', () => {
    it('It should get all Organization', async () => {
      const organizationList = [
        {
          id: 1,
          name: 'ONG',
          image: 'this is image',
          addres: 'this is address',
          phone: 123456,
          email: 'test@test.com',
          welcomeText: 'this is welcome text',
          aboutUsText: 'this is about us text',
          urlFacebook: 'Facebook Organization',
          urlInstagram: 'Instrgram Organization',
          UrlLinkedin: 'Linkedin Organization'
        },
        {
          id: 2,
          name: 'ONG',
          image: 'this is image',
          addres: 'this is address',
          phone: 123456,
          email: 'test@test.com',
          welcomeText: 'this is welcome text',
          aboutUsText: 'this is about us text',
          urlFacebook: 'Facebook Organization',
          urlInstagram: 'Instrgram Organization',
          UrlLinkedin: 'Linkedin Organization'
        },
        {
          id: 3,
          name: 'ONG',
          image: 'this is image',
          addres: 'this is address',
          phone: 123456,
          email: 'test@test.com',
          welcomeText: 'this is welcome text',
          aboutUsText: 'this is about us text',
          urlFacebook: 'Facebook Organization',
          urlInstagram: 'Instrgram Organization',
          UrlLinkedin: 'Linkedin Organization'
        }
      ];
      sandbox.stub(Organization, 'findAll').resolves(organizationList);
      const response = await request.get(baseUrl);
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0][0]).to.have.property('id');
      expect(response.body[0][0]).to.have.property('name');
      expect(response.body[0][0]).to.have.property('image');
      expect(response.body[0][0]).to.have.property('addres');
      expect(response.body[0][0]).to.have.property('phone');
      expect(response.body[0][0]).to.have.property('email');
      expect(response.body[0][0]).to.have.property('welcomeText');
      expect(response.body[0][0]).to.have.property('aboutUsText');
      expect(response.body[0][0]).to.have.property('urlFacebook');
      expect(response.body[0][0]).to.have.property('urlInstagram');
      expect(response.body[0][0]).to.have.property('UrlLinkedin');
      expect(response.body[0].length).to.be.equal(3);
    });
  });
  describe('Put Organization', () => {
    it('It should updated Organization', async () => {
      const updatedOrganization = {
        id: 1,
        name: 'ONG-Update',
        image: 'this is image - Update',
        addres: 'this is address - Update',
        phone: 1234567,
        email: 'test@test.com',
        welcomeText: 'this is welcome text - Update',
        aboutUsText: 'this is about us text - Update',
        urlFacebook: 'Facebook Organization',
        urlInstagram: 'Instagram Organization',
        UrlLinkedin: 'LinkedIn Organization'
      };
      sandbox.stub(Organization, 'update').resolves(organization);
      const responsePost = await request.post(baseUrl).send(updatedOrganization);
      expect(responsePost.status).to.be.equal(200);
      sandbox.stub(Organization, 'findAll').resolves(updatedOrganization);
      const responseUpdated = await request.get(baseUrl);
      expect(responseUpdated.body[0].name).to.be.deep.equal(updatedOrganization.name);
      expect(responseUpdated.body[0].image).to.be.deep.equal(updatedOrganization.image);
      expect(responseUpdated.body[0].addres).to.be.deep.equal(updatedOrganization.addres);
      expect(responseUpdated.body[0].phone).to.be.deep.equal(updatedOrganization.phone);
      expect(responseUpdated.body[0].email).to.be.deep.equal(updatedOrganization.email);
      expect(responseUpdated.body[0].welcomeText).to.be.deep.equal(updatedOrganization.welcomeText);
      expect(responseUpdated.body[0].aboutUsText).to.be.deep.equal(updatedOrganization.aboutUsText);
    });
  });
});
