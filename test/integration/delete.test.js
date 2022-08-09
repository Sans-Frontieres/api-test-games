const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const { resetDatabase } = require('../../src/server/db');
chai.use(chaiHttp);

const { server, api, game } = require('../setup');

beforeEach((done) => {
	resetDatabase();
	done();
});

// # TODO: Hacer test delete

after((done) => {
	resetDatabase();
	server.close();
	done();
});
