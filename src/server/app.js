// const express = require('express');
import express from 'express';
// const morgan = require('morgan');
import morgan from 'morgan';
// const gamesRoutes = require('../routes/games.routes');
import gamesRoutes from '../routes/games.routes.js';

const app = express();

app.use(express.json());

//para solicitud de obj entrantes
app.use(express.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use('/api/v1/games', gamesRoutes);

app.use('/api/v1', (__, res) => {
	res.status(200).json({ message: 'Respuesta al navegador' });
});

// module.exports = app;
export default app;
