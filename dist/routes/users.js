"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var router = (0, _express.Router)();
// /api/users/
router.post('/', _user.createUser);
router.get('/', _user.getUsers); // /api/users/:userId

router.get('/:id', _user.getOneUser);
router["delete"]('/:id', _user.deleteUser);
router.put('/:id', _user.updateUser);
var _default = router;
exports["default"] = _default;