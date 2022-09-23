const { request, chai } = require('./common.test');
const sinon = require('sinon');

const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { Activities } = require('../models');

const expect = chai.expect;

describe('# Activities test', () => {
  const baseUrl = '/activities';
  const newActivity = {
    id: 5,
    name: 'new activity',
    content: 'new activity content',
    image: 'new activity image'
  };

  const sandbox = sinon.createSandbox();

  before(() => {
  });

  after(() => {
    sinon.restore();
    sandbox.restore();
  });

  it('should save the activity', async () => {

    sandbox.stub(JwtUtils, 'verifyToken')
      .resolves({
        email: 'anEmailValidated@test.com'
      });
    sandbox.stub(UserController, 'getByEmail')
      .resolves({
        roleId: 1
      });
    sandbox.stub(Activities, 'create')
      .resolves(newActivity);

    const response = await request
                        .post(baseUrl)
                        .send(newActivity)

    const activity = response.body;
    expect(activity).to.be.a('object');
    expect(response.status).to.be.equal(200);
    expect(activity).to.be.deep.equal(newActivity);
  });
});
