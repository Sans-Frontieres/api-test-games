// const v4 = require('uuid').v4;
// const { getConnection } = require('../server/db');
import { v4 } from "uuid";
import { getConnection } from "../server/db.js";
// import * as Game from '../model/Game.js';

export const getAll = async (__, res) => {
  const games = await getConnection().get("games").value();
  res.json({ games, count: games.length });
};

export const count = async (__, res) => {
  const games = await getConnection().get("games").value();
  res.json({ count: games.length });
};

export const findByID = async (req, res) => {
  const id = req.params.id;
  const game = await getConnection().get("games").find({ id }).value();

  if (!game) return res.status(404).json({ message: "Juego no encontrado." });

  res.status(200).json(game);
};

export const create = async (req, res) => {
  const { title, description } = req.body;
  const newGame = {
    id: v4(),
    title,
    description,
  };

  const db = await getConnection();
  const game = await db.get("games").push(newGame).write();

  res.status(201).json(game[0].id);
};

export const update = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const db = await getConnection();
  const game = await db.get("games").find({ id }).value();

  if (!game)
    return res.status(404).json({ message: "El juego no fue encontrado." });

  await db.get("games").find({ id }).assign({ title, description }).write();

  res.status(200).json({ id });
};

export const remove = async (req, res) => {
  const id = req.params.id;

  const db = await getConnection();
  const game = await db.get("games").find({ id }).value();

  if (!game)
    return res.status(404).json({ message: "El juego no fue encontrado" });

  await db.get("games").remove({ id }).write();
  res.status(202).json({ id });
};

// module.exports = { getAll, create, count, findByID, update, remove };
