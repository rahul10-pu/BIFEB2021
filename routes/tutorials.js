import express from 'express';
import {getAllTutorialsByTitle} from '../controllers/tutorial.js'

const router=express.Router();

router.get("/",getAllTutorialsByTitle)
export default router //