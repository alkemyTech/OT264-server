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
  describe('GET /users', () => {
    it('It should get all users', async () => {
      const users = [
        {
          id: 1,
          firstName: 'user1',
          lastName: 'user11',
          email: 'user1@email.com',
          image: 'https://http.cat/100',
          password: 'qwerty',
          roleId: 2
        },
        {
          id: 2,
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
      expect(response.body).to.be.deep.equal(users);
    });
  });
  describe('DELETE /user', () => {
    it('It should delete a user', async () => {
      const reqParamsUserId = 1;
      sandbox.stub(User, 'destroy').resolves('User deleted');
      const response = await request.delete(`${baseUrl}/${reqParamsUserId}`);
      expect(response.status).to.be.equal(200, { msg: 'El usuario fue eliminado' });
      //expect(response.send).to.be.equal({ msg: 'El usuario fue eliminado' });
    });
  });
});
describe('User endpoint test as standar user', () => {
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
    id: 1,
    firstName: 'user1',
    lastName: 'user11',
    email: 'user1@email.com',
    password: 'qwerty',
    image: 'https://http.cat/100'
    //roleId: 2
  };

  describe('PATCH /user', () => {
    it('It should update a user', async () => {
      const updatedUser = {
        password: 'qwe123'
      };
      const reqParamsUserId = 1;
      sandbox.stub(User, 'update').resolves(user);
      const response = await request.patch(`${baseUrl}/${reqParamsUserId}`).send(updatedUser);

      //response.body = updatedUser;

      //const responseUpdatedUser = await request.get(baseUrl);
      //expect(responseUpdatedUser.body[0].password).to.be.deep.equal(responseUpdatedUser.password);
      const responseUpdatedUser = response.body;
      //expect(updatedUser).to.have.property('password');
      expect(response.status).to.be.equal(200);
      //expect(response.body);
      expect(user).to.be.deep.equal(responseUpdatedUser);
    });
  });
});
