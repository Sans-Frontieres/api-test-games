const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { server, api } = require('./setup');

describe('Prueba básica de la API-REST. - (Unitario)', () => {
	it('La api retorna un código de estado 200.', async () => {
		const response = await api.get('/api/v1');

		expect(response).to.have.status(200);
	});

	it('La api retorna un mensaje.', async () => {
		const response = await api.get('/api/v1');

		// console.log(response.body);
		expect(response.body.message).to.not.be.undefined;
	});

	it('La api retorna un código de estado 200 con el uso del done.', (done) => {
		//TODO:revisar por que este test pasa con un 201
		api.get('/api/v1').expect(200);
		done();
	});
});

after((done) => {
	server.close();
	done();
});
