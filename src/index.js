const express = require('express');
const morgan = require('morgan');

const app = express();

const PORT = 3000;

app.use(morgan('dev'));

app.use('/', (req, res) => {
	res.status(200).send('running');
});

app.listen(PORT, () => {
	console.log(`Server is running at PORT: ${PORT}`);
});
