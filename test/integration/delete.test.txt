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

// # Test Borra un nuevo juego

describe('DELETE "games/:id" eliminación el juego. - (Integration)', () => {
	it('Si el juego a eliminar no existe la api retorna un código de estado 404.', async () => {
		const idInexistente = 'JDHGF-453278-GHAGAGA';

		const response = await api.delete(`/api/v1/games/${idInexistente}`);

		expect(response).to.have.status(404);
	});

	it('Si el juego a eliminar no existe la api retorna un mensaje de error.', async () => {
		const idInexistente = 'JDHGF-453278-GHAGAGA';

		const response = await api.delete(`/api/v1/games/${idInexistente}`);

		expect(response.body.message).to.not.be.undefined;
	});

	it('Al eliminar un juego obtenemos un status 202.', async () => {
		const result = await api.post('/api/v1/games/').send(game);
		const id = result.body;

		const response = await api.delete(`/api/v1/games/${id}`);

		expect(response).to.have.status(202);
	});

	it('Al eliminar un juego correctamente obtenemos el ID.', async () => {
		const result = await api.post('/api/v1/games/').send(game);
		const id = result.body;

		const response = await api.delete(`/api/v1/games/${id}`);

		expect(response.body.id).to.not.be.undefined;
		expect(response.body.id).to.equal(id);
	});
});

after((done) => {
	resetDatabase();
	server.close();
	done();
});
