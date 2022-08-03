const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { server, api } = require('../setup');

describe('GET "/api/v1/games" lista de juegos.', () => {
	it('La api retorna la cantidad de juegos', async () => {
		const response = await api.get('/api/v1/games');

		expect(response.body.count).to.equal(8);
	});
});

after((done) => {
	server.close();
	done();
});
