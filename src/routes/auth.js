import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
const { userValidator } = require('../validations/userValidator');
const { authValidator } = require('../validations/authValidation');
const router = Router();

// /api/login
router.post('/login', authValidator, login);

// /api/register
router.post('/register', userValidator, register);

export default router;