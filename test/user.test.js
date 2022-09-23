const app = require('../app');
const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { User } = require('../models');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest')(app);
const expect = chai.expect;
const baseUrl = '/users';

describe('User endpoint test as user admin', () => {
  const sandbox = sinon.createSandbox();
  before(() => {
    sandbox.stub(JwtUtils, 'verifyToken').resolves({
      email: 'isadminEmailValidated@test.com'
    });
    sandbox.stub(UserController, 'getByEmail').resolves({
      roleId: 1
    });
  });

  after(() => {
    sinon.restore();
    sandbox.restore();
  });

  const user = {
    id: 1,
    firstName: 'user1',
    lastName: 'user11',
    email: 'user1@email.com',
    image: 'https://http.cat/100',
    password: 'qwerty',
    roleId: 1
  };

  describe('GET /users', () => {
    it('It should get all users', async () => {
      const users = [
        {
          id: 2,
          firstName: 'user1',
          lastName: 'user11',
          email: 'user1@email.com',
          image: 'https://http.cat/100',
          password: 'qwerty',
          roleId: 2
        },
        {
          id: 3,
          firstName: 'user2',
          lastName: 'user22',
          email: 'user2@email.com',
          image: 'https://http.cat/100',
          password: 'qwerty2',
          roleId: 2
        }
      ];
      sandbox.stub(User, 'findAll').resolves(users);
      const response = await request.get(baseUrl);
      expect(response.status).to.be.equal(200);
      expect(response.body.users);
    });
  });
  describe('DELETE /user', () => {
    it('It should delete a user', async () => {
      const reqParamsUserId = 1;
      sandbox.stub(User, 'destroy').resolves('User deleted');
      const response = await request.delete(`${baseUrl}/${reqParamsUserId}`);
      expect(reqParamsUserId).to.be.equal(user.id);
      expect(response.status).to.be.equal(200);
    });
  });
});
describe('User endpoint test as user standar', () => {
  const sandbox = sinon.createSandbox();
  before(() => {
    sandbox.stub(JwtUtils, 'verifyToken').resolves({
      email: 'isUserEmailValidated@test.com'
    });
    sandbox.stub(UserController, 'getByEmail').resolves({
      roleId: 2
    });
  });
  after(() => {
    sinon.restore();
    sandbox.restore();
  });

  const user = {
    id: 2,
    firstName: 'user1',
    lastName: 'user11',
    email: 'user1@email.com',
    image: 'https://http.cat/100',
    password: 'qwerty',
    roleId: 2
  };

  describe('PATCH /user', () => {
    it('It should update a user', async () => {
      const updatedUser = {
        id: 2,
        password: 'qwe123'
      };
      const reqParamsUserId = 2;
      sandbox.stub(User, 'update').resolves(user);
      const response = await request.patch(`${baseUrl}/${reqParamsUserId}`).send(updatedUser);

      response.body = updatedUser;
      expect(reqParamsUserId).to.be.deep.equal(updatedUser.id);
      expect(updatedUser).to.be.a('object');
      expect(user.id).to.be.deep.equal(updatedUser.id);
      expect(updatedUser).to.have.property('password');
      expect(response.status).to.be.equal(200);
    });
  });
});
