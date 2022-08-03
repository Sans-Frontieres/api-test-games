"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var lowdb = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');

var db;

var createConnection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var adapter;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            adapter = new FileSync('db.json');
            db = lowdb(adapter);
            _context.next = 4;
            return db.defaults({
              games: []
            }).write();

          case 4:
            console.log('db.js ', db.get('games').value());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createConnection() {
    return _ref.apply(this, arguments);
  };
}();

var getConnection = function getConnection() {
  return db;
};

var resetDatabase = function resetDatabase() {
  return getConnection().get('games').remove().write();
};

module.exports = {
  createConnection: createConnection,
  getConnection: getConnection,
  resetDatabase: resetDatabase
};