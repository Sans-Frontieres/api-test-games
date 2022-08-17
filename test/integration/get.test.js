import { api, resetDatabase, game } from '../setup';

beforeEach((done) => {
	resetDatabase();
	done();
});

describe('GET "/games" lista de juegos.  - (Integration)', () => {
	it('La api retorna un status 200', async () => {
		const response = await api.get('/api/v1/games/');

		expect(response.status).toBe(200);
	});

	it('La api retorna un array vacio de juegos.', async () => {
		const response = await api.get('/api/v1/games/');

		console.log(response.body.games);

		expect(response.body).toBeDefined();
		expect(response.body.count).toEqual(0);
	});

	it('La api retorna un juego almacenado', async () => {
		await api.post('/api/v1/games/').send(game);

		const response = await api.get('/api/v1/games/');

		expect(response.body.count).toEqual(1);
		expect(response.body.games.length).toEqual(1);
	});
});

// # Test Listar cantidad de juegos

describe('GET "/games/count" cantidad de juegos.  - (Integration)', () => {
	it('La api retorna un status 200', async () => {
		const response = await api.get('/api/v1/games/count');

		expect(response.status).toBe(200);
	});

	it('La cantidad de juegos es igual a 0', async () => {
		const response = await api.get('/api/v1/games/count');

		expect(response.body.count).toEqual(0);
	});

	it('La cantidad de juegos debe ser 1', async () => {
		await api.post('/api/v1/games/').send(game);

		const response = await api.get('/api/v1/games/count');

		expect(response.body.count).toEqual(1);
	});
});

// # Test Devuelve juego por ID

describe('GET "/games/:id" Busqueda de juegos por ID.  - (Integration)', () => {
	it('Si el juego no existe retorna un status 404', async () => {
		const idInexistente = '1233-asda3-123ad-123das';
		const response = await api.get(`/api/v1/games/${idInexistente}`);

		expect(response.status).toBe(404);
	});

	it('Si el juego no existe retorna un mensaje de error.', async () => {
		const idInexistente = '1233-asda3-123ad-123das';
		const response = await api.get(`/api/v1/games/${idInexistente}`);

		expect(response.body.message).toBeDefined();
	});

	it('Si el juego existe retorna un status 200', async () => {
		const result = await api.post('/api/v1/games/').send(game);

		const response = await api.get(`/api/v1/games/${result.body}`);

		expect(response.status).toBe(200);
	});
});

afterAll((done) => {
	resetDatabase();
	done();
});
