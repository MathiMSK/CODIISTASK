import { register,login} from "../controller/userController.js";
import express from 'express'
import auth from '../middleware/auth.js'
import user from '../middleware/user.js'

const router=express.Router()

router.post('/user/register',register)
router.post('/user/login',login)


export default router