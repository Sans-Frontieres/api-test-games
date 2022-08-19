import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";

let db;

export const createConnection = async () => {
  const adapter = new FileSync(process.env.DB_LOCAL_PATH);
  db = lowdb(adapter);
  await db.defaults({ games: [] }).write();
};

export const getConnection = () => db;

export const resetDatabase = () =>
  getConnection().get("games").remove().write();
