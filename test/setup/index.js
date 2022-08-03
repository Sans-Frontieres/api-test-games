const supertest = require('supertest');
const { server, app } = require('../../src/server');

const api = supertest(app);

module.exports = { server, api };
