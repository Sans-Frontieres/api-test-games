// const app = require('./app');
import app from './app.js';
// const { createConnection } = require('./db');
import { createConnection } from './db.js';

const PORT = 4000;

createConnection();

const server = app.listen(PORT, () => {
	console.log(`Server is running at PORT: ${PORT}`);
});

// module.exports = { server, app };
export default { app, server };
