import express from 'express';
import {getAllTutorialsByTitle,createTutorial} from '../controllers/tutorial.js'

const router=express.Router();

router.get("/",getAllTutorialsByTitle)
router.post('/',createTutorial)
export default router //