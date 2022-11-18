import express from 'express'
import createplan from '../controller/subscriptionController.js'

const router=express.Router()

router.post("/plans",createplan)
    


  export default router