import { getConnection } from '../server/db.js';

export const all = async () => {
	const games = await getConnection().get('games').value();
	return games;
};
export const count = async () => {
	const games = await getConnection().get('games').value();
	return games;
};

export const findByID = async () => {
	return games;
};

export const create = async () => {
	return games;
};

export const update = async () => {
	return games;
};

export const remove = async () => {
	return games;
};
