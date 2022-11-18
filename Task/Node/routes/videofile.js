import express from 'express'

import {getFiles,obj} from '../controller/videoController.js'


const router=express.Router()

router.post('/uploadVideo',obj)
router.get('/getvideo',getFiles)


export default router