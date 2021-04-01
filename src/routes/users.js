import { Router } from "express";
const { userValidator } = require('../validations/userValidator');
const router = Router();

import { createUser, getUsers, getOneUser, deleteUser, updateUser } from "../controllers/user.controller";

// /api/users/
router.post('/', userValidator, createUser);
router.get('/', getUsers);

// /api/users/:id
router.get('/:id', getOneUser);
router.delete('/:id', deleteUser);
router.put('/:id', userValidator, updateUser);

export default router;