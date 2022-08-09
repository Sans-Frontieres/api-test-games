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

// # Test Crea un nuevo juego

describe('GET "/games" creacion de un juegos. - (Integration)', () => {
	it('La creación exitosa devuelve un código de estado 201', async () => {
		const response = await api.post('/api/v1/games/').send(game);
		// console.log('ID: ', response.body);
		expect(response).to.have.status(201);
	});

	it('La creación exitosa devuelve un ID.', async () => {
		const response = await api.post('/api/v1/games/').send(game);

		// console.log('POST MESSAGE: ', response.body);

		expect(response.body).to.be.an('string');
		expect(response.body).to.not.be.undefined;
	});
});

after((done) => {
	resetDatabase();
	server.close();
	done();
});
