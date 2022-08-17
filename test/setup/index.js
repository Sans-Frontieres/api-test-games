import supertest from 'supertest';
import app from '../../src/server';
import { resetDatabase } from '../../src/server/db';

const api = supertest(app);

const game = {
	title: 'Juego de prueba',
	description: 'Juego creado para los test de Mocha y Chai',
};

export { api, game, resetDatabase };
