import {Router} from "express";
import { createUser, deleteUser, login, updateUser } from "../controllers";
const router = Router();

router.post('/login', login);
router.post('/users', createUser);
router.get('/users', updateUser);
router.delete('/users/:id', deleteUser);

export default router;