import {Handler} from 'express'
import * as Game from '../model/Game';

export const getAll:Handler = async (__,res) => {
	const games = await Game.all();
	res.json({games, count}) ;
};

export const count:Handler = async (__,res) => {
	const count = await Game.count()
	res.json({count})
};

export const findByID:Handler = async (req,res) => {
	const id = req.params.id;
	const game = await Game.findByID(id)
	if (!game) return res.status(404).json({ message: 'Juego no encontrado.' });
	res.status(200).json(game);
};

export const create:Handler = async (req,res) => {
	const { title, description } = req.body;
	const id = await Game.create(title, description);
	res.status(201).json(id);
};

export const update:Handler = async (req,res) => {
	const id = req.params.id;
	const { title, description } = req.body;
	const idGame = await Game.update(id, title, description)
	if (!idGame) return res.status(404).json({ message: 'El juego no fue encontrado.' });
	res.status(200).json({ id: idGame });
};

export const remove:Handler = async (req,res) => {
	const id = req.params.id;
	const idGame = await Game.remove(id);
	if (!idGame) return res.status(404).json({ message: 'El juego no fue encontrado' });
	res.status(202).json({ id });
};