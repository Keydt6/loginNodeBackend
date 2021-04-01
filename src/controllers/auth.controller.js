import User from "../models/User";
const jwt = require('jwt-simple')
const moment = require('moment')
import dbConfig from '../database/dbConfig'

/**
 * 
 * Busca en db si las credenciales corresponden a un usuario
 * 
 */
export async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });
        if(!user) throw new Error('Usuario no existe!')
        res.json({
            token: createToken(user),
            data: {
                id: user.id,
                name: user.name,
                email: user.email,
                status: user.status,
            },
            ok: 1
        });
    } catch (e) {
        console.log(e);
        res.status(422).json({
            message: e.message,
            ok: 0
        })
    }
}

/**
 * 
 * Registra un usuario en db sin autentificacion
 * 
 */
 export async function register(req, res) {
    const { name, email, password, status } = req.body;
    try {
        let newUser = await User.create({
            name,
            email,
            password,
            status
        }, {
            fields: ['name', 'email', 'password', 'status']
        });
        return res.json({
            message: 'Usuario registrado exitosamente!',
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                status: newUser.status,
            },
            ok: 1
        });
        
    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: e.message,
            ok: 0
        });
    }
}

/**
 * crear token para proteger las rutas
 * 
 * @param user: User 
 * @return token: string
 * 
 */
const createToken = (user) => {
    const payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(60, 'minutes').unix()
    }
    return jwt.encode(payload, dbConfig.database);
}
