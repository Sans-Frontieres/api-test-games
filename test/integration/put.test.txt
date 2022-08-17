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

describe('PUT "games/:id" actualización de un juego. - (Integration)', () => {
	it('Al actualizar correctamente un juego recibimos un status 200.', async () => {
		const result = await api.post('/api/v1/games/').send(game);

		const response = await api
			.put(`/api/v1/games/${result.body}`)
			.send({ title: 'Titulo actualizado.' });

		expect(response).to.have.status(200);
	});

	it('Se actualiza el titulo del juego guardado.', async () => {
		const game_1 = {
			title: 'Juego a actiualizar',
			description: 'Esto es una descripción.',
		};
		const result = await api.post('/api/v1/games/').send(game_1);
		const id = result.body;
		const gameResult = await api.get(`/api/v1/games/${id}`);

		expect(gameResult.body.title).to.equal(game_1.title);

		await api.put(`/api/v1/games/${id}`).send({ title: 'Titulo actualizado.' });

		const response = await api.get(`/api/v1/games/${id}`);

		expect(response.body.title).to.equal('Titulo actualizado.');
	});

	it('Al actualizar correctamente un juego recibimos un ID.', async () => {
		const result = await api.post('/api/v1/games/').send({
			title: 'Juego a actiualizar',
			description: 'Esto es una descripción.',
		});

		const response = await api
			.put(`/api/v1/games/${result.body}`)
			.send({ title: 'Titulo actualizado.' });

		expect(response.body.id).to.not.be.undefined;
	});

	it('Se intenta actualizar un juego inexistente, recibimos un status 404 y un message.', async () => {
		const response = await api
			.put('/api/v1/games/id-inexistente')
			.send({ title: 'Titulo actualizado.' });

		expect(response).to.have.status(404);
		expect(response.body.message).to.not.be.undefined;
	});
});

after((done) => {
	resetDatabase();
	server.close();
	done();
});
