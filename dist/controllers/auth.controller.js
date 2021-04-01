"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _User = _interopRequireDefault(require("../models/User"));

var _dbConfig = _interopRequireDefault(require("../database/dbConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import moment from 'moment'
// import jwt from 'jwt-simple'
var jwt = require('jwt-simple');

var moment = require('moment');

function login(_x, _x2) {
  return _login.apply(this, arguments);
}

function _login() {
  _login = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 1;
            _context.next = 4;
            return _User["default"].findOne({
              where: {
                email: email,
                password: password
              }
            });

          case 4:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            throw new Error('Usuario no existe!');

          case 7:
            if (!user) {
              _context.next = 14;
              break;
            }

            console.log('user', user);
            res.json({
              ok: 1,
              token: createToken(user),
              user: {
                id: user.id,
                name: user.name,
                email: user.email,
                status: user.status
              }
            });
            console.log(_typeof(user.password));
            console.log(_typeof(password));

            if (password.equals(user.password)) {
              _context.next = 14;
              break;
            }

            throw new Error('Password no coincide!');

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(422).json({
              ok: 0,
              error: _context.t0.name + ': ' + _context.t0.message
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));
  return _login.apply(this, arguments);
}

var createToken = function createToken(user) {
  var payload = {
    userId: user.id,
    createAt: moment().unix(),
    expiredAt: moment().add(20, 'minutes').unix()
  };
  return jwt.encode(payload, _dbConfig["default"].database);
};