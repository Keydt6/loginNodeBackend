"use strict";

var jwt = require('jwt-simple');

var moment = require('moment');

var checkToken = function checkToken(rep, res, next) {
  if (!req.headers['user-token']) {
    return res.json({
      error: 'Necesitas incluir el user-token en la cabecera'
    });
  }

  var userToken = req.headers['user-token'];
  var payload = {};

  try {
    payload = jwt.decode(userToken, 'hRdhUao3O4');
  } catch (err) {
    return res.json({
      error: 'El token es incorrecto'
    });
  }

  if (payload.expiredAt < moment().unix()) {
    return res.json({
      error: 'El token ha expidaro'
    });
  }

  next();
};

module.exports = checkToken;