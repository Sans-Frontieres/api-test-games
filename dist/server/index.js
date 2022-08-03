"use strict";

var app = require('./app');

var _require = require('./db'),
    createConnection = _require.createConnection;

var PORT = 4000;
createConnection();
app.listen(PORT, function () {
  console.log("Server is running at PORT: ".concat(PORT));
});