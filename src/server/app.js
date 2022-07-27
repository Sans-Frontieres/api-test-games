const express = require('express');
const morgan = require('morgan');
const rootRoutes = require('../routes/root.routes');

const app = express();

app.use(morgan('dev'));

app.use('/api/v1/root', rootRoutes);

module.exports = app;
