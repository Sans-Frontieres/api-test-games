const lowdb = require('lowdb');

const FileSync = require('lowdb/adapters/FileSync');

let db;

const createConnection = async () => {
	const adapter = new FileSync('db.json');
	db = lowdb(adapter);
	await db.defaults({ games: [] }).write();
	// console.log('db.js ', db.get('games').value());
};

const getConnection = () => db;

const resetDatabase = () => getConnection().get('games').remove().write();

module.exports = { createConnection, getConnection, resetDatabase };
