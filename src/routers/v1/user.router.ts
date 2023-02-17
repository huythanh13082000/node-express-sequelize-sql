import  express  from "express";
import { userController } from "../../controllers/user.controller";
const route = express.Router()
route.post('/users',userController.createUser)
export const userRouter = route