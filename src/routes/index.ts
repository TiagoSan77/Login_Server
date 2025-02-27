import {Router} from "express";
import { login} from "../controllers";
import { auth } from "../middlewares";
const router = Router();
import user from "../controllers/index"

router.post('/login', login);
router.post('/criar', user.create);
router.use(auth);
router.get('/listar', user.read);
router.put('/atualizar', user.update);
router.delete('/deletar/:id', user.delete);

export default router;