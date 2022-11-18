import { register,login} from "../controller/adminController.js";
import express from 'express'
import admin from '../middleware/admin.js'
import auth from '../middleware/auth.js'

const router=express.Router()

router.post('/admin/register',register)
router.post('/admin/login',login)


export default router