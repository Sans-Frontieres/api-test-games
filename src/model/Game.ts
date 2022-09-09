import { v4 } from 'uuid';
import { getConnection } from '../server/db';

export const all = async () => {
	const games = await getConnection().get('games').value();
	return {games, count: games.length};
};

export const count = async () => {
	const games = await getConnection().get('games').value();
	return games.length;
};

export const findByID = async (id: string ) => {
	const game = await getConnection().get('games').find({ id }).value();
	return game;
};

export const create = async (title:string, description:string) => {
	const newGame = {
		id: v4(),
		title,
		description
	}

	const db = await getConnection();
	const game = await db.get('games').push(newGame).write();

	return game;
};

export const update = async (id: string, title: string, description: string, ) => {
	const db = await getConnection();
	const game = await db.get('games').find({ id }).value();
	if(!game) return;
	await db.get('games').find({ id }).assign({ title, description }).write();
	return game;
};

export const remove = async (id: string) => {
	const db = await getConnection();
	const game = await db.get('games').find({ id }).value();
	if(!game) return;
	await db.get('games').remove({ id }).write();
	return game;
};