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
    json = sinon.spy();
    res = { json };
    });
  });

  const user = {
    id: 1,
    firstName: 'user1',
    lastName: 'user11',
    email: 'user1@email.com',
    image: 'https://http.cat/100',
    password: 'qwerty',
    roleId: 2
  };

  describe('PATCH /user', () => {
    let updateStub;
    before(function () {
      updateStub = sinon.stub(User, 'update');
    });

    afterEach(function () {
      status = sinon.stub();
      json = sinon.spy();
      res = { json, status };
      status.returns(res);
    });

    it('returns 200 and a member update message', async function () {
      const req = {params: { id: 1 }, body: { password: '1234' }};
      updateStub.resolves([true]);
      //await MemberController.updateMembers(req,res);
      expect(response.status).to.be.equal(200);
      //expect(status.args[0][0]).be.equal(200);
      expect(json.args[0][0].msg).be.equal('Member was updated successfully');
    });
  });
});
