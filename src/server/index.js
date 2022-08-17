import './config.js';
import app from './app.js';
import { createConnection } from './db.js';

createConnection();

const serverRun = () => {
	app.listen(process.env.PORT, () => {
		console.log(`Server is running at PORT: ${process.env.PORT}`);
	});
};

if (process.env.NODE_ENV != 'test') serverRun();

export default app;
