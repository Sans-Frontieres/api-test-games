import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

// # Firma
type Game = {
  id: string
  title: string
  description: string
}

// # Schema
type Schema = {
  games: Game[]
}

// Conexión de la bd
let db: lowdb.LowdbSync<Schema>;

export const createConnection = async () => {
  const adapter = new FileSync<Schema>(`${process.env.DB_LOCAL_PATH}`);
  db = lowdb(adapter);
  await db.defaults({ games: [] }).write();
};

export const getConnection = () => db;

export const resetDatabase = () =>
  getConnection().get("games").remove().write();
