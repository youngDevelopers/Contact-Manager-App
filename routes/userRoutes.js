import express from 'express';
import { getCurrentUser, getUsers, loginUser, registerUser } from '../controllers/userController';
import { validateToken } from '../middleware/validateTokenHandler';


//Setting up the Router
const userRouter = express.Router();


//Routes
userRouter.get("/", validateToken, getUsers);
userRouter.get("/current-user", validateToken ,getCurrentUser)
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);



export default userRouter;
