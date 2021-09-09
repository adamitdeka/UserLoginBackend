//importing dependencies
import {Router} from 'express';
import User from '../controller/user.js';
const userRouter = Router();

//creating an instance of user class from controller
const user = new User();
//creating routes for signup and login
userRouter.post('/signup',user.signup);
userRouter.post('/login', user.login);

//exporting user routes
export default userRouter;



