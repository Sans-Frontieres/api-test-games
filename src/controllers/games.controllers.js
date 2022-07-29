const v4 = require('uuid').v4;
const { getConnection } = require('../server/db');

const getAll = async (__, res) => {
	const games = await getConnection().get('games').value();
	res.json({ games, count: games?.length });
};

const count = async (__, res) => {
	const games = await getConnection().get('games').value();
	res.json({ count: games?.length });
};

const findByID = async (req, res) => {
	const id = req.params.id;

	const game = await getConnection().get('games').find({ id }).value();

	if (!game) return res.status(404).json({ error: 'Juego no encontrado.' });

	res.status(200).json(game);
};

const create = async (req, res) => {
	const { title, description } = req.body;

	const newGame = {
		id: v4(),
		title,
		description,
	};

	const db = await getConnection();
	await db.get('games').push(newGame).write();

	res.status(201).json(newGame.id);
};

module.exports = { getAll, create, count, findByID };
