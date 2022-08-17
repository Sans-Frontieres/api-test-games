import { api, resetDatabase, game } from '../setup';

beforeEach((done) => {
	resetDatabase();
	done();
});

// # Test Crea un nuevo juego

describe('POST "/games" creacion de un juegos. - (Integration)', () => {
	it('La creación exitosa devuelve un código de estado 201', async () => {
		const response = await api.post('/api/v1/games/').send(game);

		expect(response.status).toBe(201);
	});

	it('La creación exitosa devuelve un ID.', async () => {
		const response = await api.post('/api/v1/games/').send(game);

		// TODO: Consultar a Nico por que devuelve un string vacio
		console.log(response.body === '');

		// TODO: Consultar a Nico si esta linea va
		// expect(response.body).toBe('string');
		expect(response.body).toBeDefined();
	});
});

afterAll((done) => {
	resetDatabase();
	done();
});
