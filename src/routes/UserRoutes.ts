import {Router} from "express";
const router = Router();
import user from "../controllers/UserController"
import { auth } from "../middlewares/authMiddleware";

router.get('/users',auth, user.read);
router.put('/users/:id',auth, user.update);
router.delete('/users/:id',auth, user.delete);

export default router;