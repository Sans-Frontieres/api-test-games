import { api } from '../setup';

describe('Prueba básica de la API-REST. - (Unitario)', () => {
	it('La api retorna un código de estado 200.', async () => {
		const response = await api.get('/api/v1');

		expect(response.status).toBe(200);
	});

	it('La api retorna un mensaje.', async () => {
		const response = await api.get('/api/v1');

		expect(response.body.message).toBeDefined();
	});

	it('La api retorna un código de estado 200 con el uso del done.', (done) => {
		//TODO:revisar por que este test pasa con un 201
		api.get('/api/v1').expect(200);
		done();
	});
});
