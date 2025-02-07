import {Router} from "express";
import { createUser, deleteUser, login, updateUser , listUsers} from "../controllers";
import { auth } from "../middlewares";
const router = Router();

router.post('/login', login);
router.post('/criar', createUser);
router.use(auth);
router.get('/listar', listUsers);
router.put('/atualizar', updateUser);
router.delete('/deletar/:id', deleteUser);

export default router;