const app = require('../app');
const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { Member } = require('../models');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest')(app);
const expect = chai.expect;
const baseUrl = '/members';

describe('Members test', () => {
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

  const member = {
    id: 1,
    name: 'Marita Gomez',
    facebookUrl: 'Marita_Gomez',
    instagramUrl: 'MaritaGomez',
    linkedinUrl: 'Marita-Gomez',
    image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
    description: 'Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil'
  };

  //Test the GET /members
  describe('GET /members', () => {
    it('It should get all members', async () => {
      const members = [
        {
          id: 1,
          name: 'Marita Gomez',
          facebookUrl: 'Marita_Gomez',
          instagramUrl: 'MaritaGomez',
          linkedinUrl: 'Marita-Gomez',
          image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
          description: 'Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          id: 2,
          name: 'Rodrigo Fuentes',
          facebookUrl: 'Rodrigo Fuentes',
          instagramUrl: 'RodrigoFuentes',
          linkedinUrl: 'Rodrigo-Fuentes',
          image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
          description: 'Contador',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        },
        {
          id: 3,
          name: 'Marita Gomez',
          facebookUrl: 'Marita_Gomez',
          instagramUrl: 'MaritaGomez',
          linkedinUrl: 'Marita-Gomez',
          image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
          description: 'Fundadora Marita estudió la carrera de nutrición y se especializó en nutrición infantil',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ];
      sandbox.stub(Member, 'findAll').resolves(members);
      const response = await request.get(baseUrl).send(members);
      expect(response.status).to.be.equal(200);
    });
  });

  //Test the POST /members
  describe('POST /members', () => {
    it('It should save the member', async () => {
      sandbox.stub(Member, 'create').resolves(member);
      const response = await request.post(baseUrl).send(member);

      const newMember = response.body;
      expect(newMember).to.be.a('object');
      expect(newMember).to.have.property('id');
      expect(newMember).to.have.property('name');
      expect(newMember).to.have.property('facebookUrl');
      expect(newMember).to.have.property('instagramUrl');
      expect(newMember).to.have.property('linkedinUrl');
      expect(newMember).to.have.property('image');
      expect(newMember).to.have.property('description');
      expect(response.status).to.be.equal(200);
      expect(member).to.be.deep.equal(newMember);
    });
  });

  //Test the PUT /members
  describe('PUT /members', () => {
    it('It should update a member', async () => {
      const updatedMember = {
        id: 1,
        name: 'Alan Ades',
        facebookUrl: 'Alan Ades',
        instagramUrl: 'Alan Ades',
        linkedinUrl: 'Alan Ades',
        image: 'https://drive.google.com/drive/u/0/folders/1OVhs9sXHQ1jgfOWHztOTSSmpq4QKCH4q',
        description: 'Alan es desarrollador web backend en Node.js'
      };
      const reqParamsMemberId = 1;
      sandbox.stub(Member, 'update').resolves(member);
      const response = await request.put(`${baseUrl}/${reqParamsMemberId}`).send(updatedMember);

      expect(reqParamsMemberId).to.be.deep.equal(updatedMember.id);
      expect(member.id).to.be.deep.equal(updatedMember.id);
      expect(updatedMember).to.be.a('object');
      expect(updatedMember).to.have.property('name');
      expect(updatedMember).to.have.property('facebookUrl');
      expect(updatedMember).to.have.property('instagramUrl');
      expect(updatedMember).to.have.property('linkedinUrl');
      expect(updatedMember).to.have.property('image');
      expect(updatedMember).to.have.property('description');
      expect(response.status).to.be.equal(200);
    });
  });

  //Test the DELETE /members
  describe('DELETE /members', () => {
    it('It should delete a member', async () => {
      const reqParamsMemberId = 1;
      sandbox.stub(Member, 'destroy').resolves('Member deleted');
      const response = await request.delete(`${baseUrl}/${reqParamsMemberId}`);
      expect(reqParamsMemberId).to.be.equal(member.id);
      expect(response.status).to.be.equal(200);
    });
  });
});
