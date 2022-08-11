// const v4 = require('uuid').v4;
import { v4 } from 'uuid';
// const { getConnection } = require('../server/db');
// import { getConnection } from '../server/db.js';

import * as Game from '../model/Game.js';

export const getAll = async (__, res) => {
	const games = await Game.all();
	res.json({ games, count: games.length });
};

export const count = async (__, res) => {
	const games = await Game.count();
	res.json({ count: games.length });
};

export const findByID = async (req, res) => {
	const id = req.params.id;
	const game = await Game.findByID(id);
	if (!game) return res.status(404).json({ message: 'Juego no encontrado.' });
	res.status(200).json(game);
};

export const create = async (req, res) => {
	const { title, description } = req.body;
	const newGame = {
		id: v4(),
		title,
		description,
	};
	const game = await Game.create(newGame);
	res.status(201).json(game.id);
};

export const update = async (req, res) => {
	const id = req.params.id;
	const { title, description } = req.body;
	const game = await Game.update(title, description, id);
	if (!game) return res.status(404).json({ message: 'El juego no fue encontrado.' });
	res.status(200).json({ id });
};

export const remove = async (req, res) => {
	const id = req.params.id;
	const game = await Game.remove(id);
	if (!game) return res.status(404).json({ message: 'El juego no fue encontrado' });
	res.status(202).json({ id });
};

// module.exports = { getAll, create, count, findByID, update, remove };
