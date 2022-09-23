const app = require('../app');
const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');
const { Testimonial } = require('../models');
const chai = require('chai');
const sinon = require('sinon');
const request = require('supertest')(app);
const expect = chai.expect;
const baseUrl = '/testimonials';

describe('Testimonails test', () => {
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

  const testimonial = {
    id: 1,
    name: 'John Doe',
    image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    content: 'Testimonial test'
  };

  //Test the GET /testimonials
  describe('GET /testimonials', () => {
    it('It should get all testimonials', async () => {
      const testimonials = [
        {
          id: 1,
          name: 'John Doe',
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          content: 'Testimonial test'
        },
        {
          id: 2,
          name: 'John Doe',
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          content: 'Testimonial test'
        },
        {
          id: 3,
          name: 'John Doe',
          image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
          content: 'Testimonial test'
        }
      ];
      sandbox.stub(Testimonial, 'findAll').resolves(testimonials);
      const response = await request.get(baseUrl).send(testimonials);
      expect(response.status).to.be.equal(200);
    });
  });

  //Test the POST /testimonials
  describe('POST /testimonials', () => {
    it('It should save the testimonial', async () => {
      sandbox.stub(Testimonial, 'create').resolves(testimonial);
      const response = await request.post(baseUrl).send(testimonial);

      const newTestimonial = response.body;
      expect(newTestimonial).to.be.a('object');
      expect(newTestimonial).to.have.property('name');
      expect(newTestimonial).to.have.property('image');
      expect(newTestimonial).to.have.property('content');
      expect(response.status).to.be.equal(200);
      expect(testimonial).to.be.deep.equal(newTestimonial);
    });
  });

  //Test the PUT /testimonials
  describe('PUT /testimonials', () => {
    it('It should update a testimonial', async () => {
      const updatedTestimonial = {
        id: 1,
        name: 'Alan Ades',
        image: 'Alo foto',
        content: 'Alo test'
      };
      const reqParamsTestimonialId = 1;
      sandbox.stub(Testimonial, 'update').resolves(testimonial);
      const response = await request.put(`${baseUrl}/${reqParamsTestimonialId}`).send(updatedTestimonial);

      response.body = updatedTestimonial;
      expect(reqParamsTestimonialId).to.be.deep.equal(updatedTestimonial.id);
      expect(testimonial.id).to.be.deep.equal(updatedTestimonial.id);
      expect(updatedTestimonial).to.be.a('object');
      expect(updatedTestimonial).to.have.property('name');
      expect(updatedTestimonial).to.have.property('image');
      expect(updatedTestimonial).to.have.property('content');
      expect(response.status).to.be.equal(200);
    });
  });

  //Test the DELETE /testimonials
  describe('DELETE /testimonials', () => {
    it('It should delete a testimonial', async () => {
      const reqParamsTestimonialId = 1;
      sandbox.stub(Testimonial, 'destroy').resolves('Testimonial deleted');
      const response = await request.delete(`${baseUrl}/${reqParamsTestimonialId}`);
      expect(reqParamsTestimonialId).to.be.equal(testimonial.id);
      expect(response.status).to.be.equal(200);
    });
  });
});
