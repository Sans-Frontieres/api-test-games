const supertest = require('supertest');
const { server, app } = require('../../src/server');

const api = supertest(app);

const game = {
	title: 'Juego de prueba',
	description: 'Juego creado para los test de Mocha y Chai',
};

module.exports = { server, api, game };
