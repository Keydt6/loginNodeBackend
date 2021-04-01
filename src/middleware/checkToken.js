const jwt = require('jwt-simple');
const moment = require('moment');


/**
 * 
 * Chequea que haya un token activo
 * para dar permiso a las rutas privadas
 * 
 */
const checkToken = (req, res, next) => {
    if(!req.headers['user-token']) {
        return res.json({ error: 'Necesitas incluir el user-token en la cabecera' });
    }

    const userToken = req.headers['user-token'];
    console.log('token', userToken)
    let payload = {}

    try {
        payload = jwt.decode(userToken, 'hRdhUao3O4');
    } catch (err) {
        return res.json({ error: 'El token es incorrecto'});
    }

    if(payload.expiredAt < moment().unix()) {
        return res.json({ error: 'El token ha expidaro' });
    }

    next();
}

module.exports = checkToken