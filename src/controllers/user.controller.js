import User from "../models/User";

/**
 * 
 * Busca en db todos los usuarios
 * 
 */
export async function getUsers(req, res) {
    const users = await User.findAll();
    res.json({
        message: '',
        data: users,
        ok: 1
    });
}

/**
 * 
 * Registra un usuario en db
 * 
 */
export async function createUser(req, res) {
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
            message: 'Usuario creado exitosamente!',
            data: newUser,
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
 * 
 * Busca en db un usuario por id
 * 
 */
export async function getOneUser(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id
            }
        });
        res.json({
            message: '',
            data: user,
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
 * 
 * Elimina un usuario de db
 * 
 */
export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await User.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'User deleted successfully',
            data: deleteRowCount,
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
 * 
 * Modifica un usuario de db
 * 
 */
export async function updateUser(req, res) {
    const { id } = req.params;
    const { name, email, password, status } = req.body;
    try {

        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'password', 'status'],
            where: {
                id
            }
        });

        if (users.length > 0) {
            users.forEach(async user => {
              const updatedUser = await user.update({
                    name,
                    email,
                    password,
                    status
                });
            });
        }

        return res.json({
            message: 'Usuario actualizado exitosamente!',
            data: updatedUser,
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