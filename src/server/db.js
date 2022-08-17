// const lowdb = require('lowdb');
import lowdb from 'lowdb';
// const FileSync = require('lowdb/adapters/FileSync');
import FileSync from 'lowdb/adapters/FileSync.js';

let db;

export const createConnection = async () => {
	const adapter = new FileSync(process.env.DB_LOCAL_PATH);
	db = lowdb(adapter);
	await db.defaults({ games: [] }).write();
	// console.log('db.js ', db.get('games').value());
};

export const getConnection = () => db;

export const resetDatabase = () => getConnection().get('games').remove().write();

// module.exports = { createConnection, getConnection, resetDatabase };
// export default { createConnection, getConnection, resetDatabase };
