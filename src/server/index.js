const app = require('./app');
const { createConnection } = require('./db');

const PORT = 4000;

createConnection();

const server = app.listen(PORT, () => {
	console.log(`Server is running at PORT: ${PORT}`);
});

module.exports = { server, app };
// export default app
