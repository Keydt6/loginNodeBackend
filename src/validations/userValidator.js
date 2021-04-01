import User from "../models/User";


/**
 * 
 * Valida que el usuario a ser registrado
 * tenga datos integros
 * 
 */
export const userValidator = async (req, res, next) => {
    const { name, email, password, status } = req.body;
    const user = await User.findOne({
        where: {
            email
        }
    }); 
    if(user) {
        return res.status(422).json({ error: 'Email ya esta registrado!'})
    }
    if(!name || !email || !password || !status ) {
        return res.status(422).json({ error: 'Los datos no pueden ser null'});
    }
    next()
};