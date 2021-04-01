/**
 * 
 * Valida que los datos para
 * iniciar sesion sean integros
 * 
 */
export const authValidator = async (req, res, next) => {
  const { name, email, password, status } = req.body;
  if(!email || !password ) {
      return res.status(422).json({ error: 'Los datos no pueden ser null'});
  }
  next()
};