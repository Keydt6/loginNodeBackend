"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dbConfig = _interopRequireDefault(require("./dbConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import User from '../models/User';
var sequelize = new _sequelize["default"](_dbConfig["default"].database, _dbConfig["default"].username, _dbConfig["default"].password, {
  host: _dbConfig["default"].host,
  dialect: _dbConfig["default"].driver
});
exports.sequelize = sequelize;