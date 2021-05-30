import express from 'express';
import {getAllTutorialsByTitle,createTutorial,deleteTutorialByID,deleteTutorials,updateTutorialByID} from '../controllers/tutorial.js'

const router=express.Router();

router.get("/",getAllTutorialsByTitle)
router.post('/',createTutorial)
router.delete('/',deleteTutorials)
router.delete("/:id", deleteTutorialByID)
router.put("/:id",updateTutorialByID)
export default router //