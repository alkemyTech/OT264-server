const app = require('../app');
const request = require('supertest')(app);
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const sinon = require('sinon');

module.exports = { request, chai, should, expect, sinon };
