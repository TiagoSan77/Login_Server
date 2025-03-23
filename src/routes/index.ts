import {Router} from "express";
import { auth } from "../middlewares";
const router = Router();
import user from "../controllers/index"

router.post('/login', user.login);
router.post('/register', user.create);
router.use(auth);
router.get('/users', user.read);
router.put('/users/:id', user.update);
router.delete('/users/:id', user.delete);

export default router;