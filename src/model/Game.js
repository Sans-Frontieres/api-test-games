import { getConnection } from '../server/db.js';

export const all = async () => {
	const games = await getConnection().get('games').value();
	return games;
};

export const count = async () => {
	const games = await getConnection().get('games').value();
	return games;
};

export const findByID = async ({ id }) => {
	const game = await getConnection().get('games').find({ id }).value();
	return game;
};

export const create = async (newGame) => {
	const db = await getConnection();
	const game = await db.get('games').push(newGame).write();
	return game;
};

export const update = async (title, description, id) => {
	const db = await getConnection();
	const game = await db.get('games').find({ id }).value();
	await db.get('games').find({ id }).assign({ title, description }).write();
	return game;
};

export const remove = async (id) => {
	const db = await getConnection();
	const game = await db.get('games').find({ id }).value();
	await db.get('games').remove({ id }).write();
	return game;
};
