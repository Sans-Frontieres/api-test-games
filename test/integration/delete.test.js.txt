import { api, resetDatabase, game } from '../setup';

beforeEach((done) => {
	resetDatabase();
	done();
});

// # Test Borra un nuevo juego

describe('DELETE "games/:id" eliminación el juego. - (Integration)', () => {
	it('Si el juego a eliminar no existe la api retorna un código de estado 404.', async () => {
		const idInexistente = 'JDHGF-453278-GHAGAGA';

		const response = await api.delete(`/api/v1/games/${idInexistente}`);

		expect(response.status).toBe(404);
	});

	it('Si el juego a eliminar no existe la api retorna un mensaje de error.', async () => {
		const idInexistente = 'JDHGF-453278-GHAGAGA';

		const response = await api.delete(`/api/v1/games/${idInexistente}`);

		expect(response.body.message).toBeDefined();
	});

	// TODO: Revisar este Test
	it.skip('Al eliminar un juego obtenemos un status 202.', async () => {
		const result = await api.post('/api/v1/games/').send(game);
		const id = result.body;

		const response = await api.delete(`/api/v1/games/${id}`);

		console.log('LOG DE RESPONSE', response);

		expect(response.status).toBe(202);
	});

	// TODO: Revisar este Test
	it.skip('Al eliminar un juego correctamente obtenemos el ID.', async () => {
		const result = await api.post('/api/v1/games/').send(game);
		const id = result.body;

		console.log('CONSOLE asd', result);

		const response = await api.delete(`/api/v1/games/${id}`);

		expect(response.body.id).toBeDefined();
		expect(response.body.id).toEqual(id);
	});
});

afterAll((done) => {
	resetDatabase();
	done();
});
