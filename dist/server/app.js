"use strict";

var express = require('express');

var morgan = require('morgan');

var gamesRoutes = require('../routes/games.routes');

var app = express();
app.use(express.json()); //para solicitud de obj entrantes

app.use(express.urlencoded({
  extended: false
}));
app.use(morgan('dev'));
app.use('/api/v1/games', gamesRoutes); // app.use("/api/v1", (__, res) => {
//   res.status(200).json({ data: "Respuesta al navegador" });
// });

module.exports = app;