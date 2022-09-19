const { request, chai } = require('./common.test');
const sinon = require('sinon');
const RoleValidator = require('./../middlewares/roleValidator');

describe('# Activities test', () => {
  const baseUrl = '/activities';
  const newActivity = {
    id: 5,
    name: 'new activity',
    content: 'new activity content',
    image: 'new activity image'
  };

  before(async () => {
    sinon.stub(RoleValidator, 'isAdmin').returns(() => {
      return true;
    });
  });

  after(() => {
    RoleValidator.isAdmin.restore();
  });

  it('should save the activity', () => {
    console.log('Activities test');
    return request
      .post(baseUrl)
      .send(newActivity)
      .expect(200)
      .expect((res) => {
        console.log('1234564');
        res.body.should.equal(newActivity);
      });
  });
});
