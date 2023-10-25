import { Router } from "express";
import { signUPController, loginController, protectedController } from "../controllers/userController";

const userRouter: Router = Router()

userRouter.post('/', signUPController);
userRouter.post('/login', loginController)
userRouter.get('/', protectedController)


export default userRouter