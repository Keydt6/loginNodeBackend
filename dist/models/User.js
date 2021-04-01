"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _database.sequelize.define('user', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  password: {
    type: _sequelize["default"].TEXT
  },
  status: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
}); // const User = new User(sequelize, Sequelize);


_database.sequelize.sync({
  force: false
}).then(function () {
  console.log('Tabla User sincronizada');
});

var _default = User;
exports["default"] = _default;