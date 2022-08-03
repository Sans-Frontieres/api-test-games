"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var v4 = require('uuid').v4;

var _require = require('../routes/games.routes'),
    get = _require.get;

var _require2 = require('../server/db'),
    getConnection = _require2.getConnection;

var getAll = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(__, res) {
    var games;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getConnection().get('games').value();

          case 2:
            games = _context.sent;
            res.json({
              games: games,
              count: games === null || games === void 0 ? void 0 : games.length
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var count = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(__, res) {
    var games;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getConnection().get('games').value();

          case 2:
            games = _context2.sent;
            res.json({
              count: games === null || games === void 0 ? void 0 : games.length
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function count(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var findByID = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, game;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return getConnection().get('games').find({
              id: id
            }).value();

          case 3:
            game = _context3.sent;

            if (game) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              error: 'Juego no encontrado.'
            }));

          case 6:
            res.status(200).json(game);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function findByID(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var create = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, title, description, newGame, db;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            newGame = {
              id: v4(),
              title: title,
              description: description
            };
            _context4.next = 4;
            return getConnection();

          case 4:
            db = _context4.sent;
            _context4.next = 7;
            return db.get('games').push(newGame).write();

          case 7:
            res.status(201).json(newGame.id);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function create(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var update = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, title, description, db, game;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description;
            _context5.next = 4;
            return getConnection();

          case 4:
            db = _context5.sent;
            _context5.next = 7;
            return db.get('games').find({
              id: id
            }).value();

          case 7:
            game = _context5.sent;

            if (game) {
              _context5.next = 10;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              message: 'El juego no fue encontrado.'
            }));

          case 10:
            _context5.next = 12;
            return db.get('games').find({
              id: id
            }).assign({
              title: title,
              description: description
            }).write();

          case 12:
            res.status(200).json({
              id: id
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function update(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

var remove = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, db, game;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return getConnection();

          case 3:
            db = _context6.sent;
            _context6.next = 6;
            return db.get('games').find({
              id: id
            }).value();

          case 6:
            game = _context6.sent;

            if (game) {
              _context6.next = 9;
              break;
            }

            return _context6.abrupt("return", res.tatus(404).json({
              message: 'El juego no fue encontrado'
            }));

          case 9:
            _context6.next = 11;
            return db.get('games').remove({
              id: id
            }).write();

          case 11:
            res.status(200).json({
              juegoEliminado: id
            });

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function remove(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

module.exports = {
  getAll: getAll,
  create: create,
  count: count,
  findByID: findByID,
  update: update,
  remove: remove
};