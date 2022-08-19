import { v4 } from "uuid";
import { getConnection } from "../server/db.js";

export const all = async () => {
  const games = await getConnection().get("games").value();
  return games;
};

export const count = async () => {
  const games = await getConnection().get("games").value();
  return games;
};

export const findByID = async (id) => {
  const game = await getConnection().get("games").find({ id }).value();
  return game;
};

export const create = async (title, description) => {
  const newGame = {
    id: v4(),
    title,
    description,
  };

  const db = await getConnection();
  const game = await db.get("games").push(newGame).write();
  return game;
};

export const update = async (id, title, description) => {
  const db = await getConnection();

  const game = await db.get("games").find({ id }).value();

  if (!game) return;

  return await db
    .get("games")
    .find({ id })
    .assign({ title, description })
    .write();
};

export const remove = async (id) => {
  const db = await getConnection();
  const game = await db.get("games").find({ id }).value();

  if (!game) return;

  const gameUpdated = await db.get("games").remove({ id }).write();
  return id;
};
