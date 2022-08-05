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

// # Test Listado completo de juegos

describe.skip('GET "/games" lista de juegos.  - (Integration)', () => {
	it('La api retorna un status 200', async () => {
		const response = await api.get('/api/v1/games/');

		expect(response).to.have.status(200);
	});

	it('La api retorna un array vacio cuando no hay juegos', async () => {
		const response = await api.get('/api/v1/games/');

		console.log(response.body.games);

		expect(response.body.games).to.be.an('array');
		expect(response.body).to.not.be.undefined;
		expect(response.body.count).to.equal(0);
	});

	it('La api retorna un juego almacenado', async () => {
		await api.post('/api/v1/games/').send(game);

		const response = await api.get('/api/v1/games/');

		// console.log('Juegos: ', response.body.games.length);
		expect(response.body.count).to.equal(1);
		expect(response.body.games.length).to.equal(1); // lenght -> length
	});
});

// # Test Listar cantidad de juegos

describe.skip('GET "/games/count" cantidad de juegos.  - (Integration)', () => {
	it('La api retorna un status 200', async () => {
		const response = await api.get('/api/v1/games/count');

		expect(response).to.have.status(200);
	});

	it('La cantidad de juegos es igual a 0', async () => {
		const response = await api.get('/api/v1/games/count');

		expect(response.body.count).to.equal(0);
	});

	it('La cantidad de juegos debe ser 1', async () => {
		await api.post('/api/v1/games/').send(game);

		const response = await api.get('/api/v1/games/count');

		expect(response.body.count).to.equal(1);
	});
});

// # Test Devuelve juego por ID

describe('GET "/games/:id" Busqueda de juegos por ID.  - (Integration)', () => {
	it('Si el juego no existe retorna un status 404', async () => {
		const idInexistente = '1233-asda3-123ad-123das';
		const response = await api.get(`/api/v1/games/${idInexistente}`);

		expect(response).to.have.status(404);
	});

	it('Si el juego no existe retorna un mensaje de error.', async () => {
		const idInexistente = '1233-asda3-123ad-123das';
		const response = await api.get(`/api/v1/games/${idInexistente}`);

		expect(response.body.message).to.not.be.undefined;
	});

	// TODO: Terminar últimos test de Busqueda por ID

	it('Si el juego existe retorna un status 200', async () => {
		const result = await api.get('');
	});
});

after((done) => {
	resetDatabase();
	server.close();
	done();
});
