const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { server, api } = require('../setup');

// # Test Listado completo de juegos

describe('GET "/api/v1/games" lista de juegos.', () => {
	it('La api retorna la cantidad de juegos', async () => {
		const response = await api.get('/api/v1/games');

		expect(response.body.count).to.equal(2);
	});
});

after((done) => {
	server.close();
	done();
});

// # Test Devuelve juego por ID

describe('GET "/api/v1/games/:id" juego por id', () => {
	it('La api retorna el juego correspondiente por id', async () => {
		const response = await api.get('/api/v1/games/8089d6b8-0da1-4869-b5e9-1d6c38bb8cb1');

		expect(response.body.title).to.equal('Doom II');
		console.log(
			`Test /api/v1/games/8089d6b8-0da1-4869-b5e9-1d6c38bb8cb1: ${response.body.title}`
		);
	});
});

// # Test Crea un nuevo juego
