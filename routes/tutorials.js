import express from 'express';
import {authJwt} from '../middleware/authJWT.js'
import {getAllTutorialsByTitle,createTutorial,deleteTutorialByID,deleteTutorials,updateTutorialByID} from '../controllers/tutorial.js'

const router=express.Router();

router.get("/",getAllTutorialsByTitle)
router.post('/',[authJwt.verifyToken, authJwt.isAdmin],createTutorial)
router.delete('/',[authJwt.verifyToken, authJwt.isModerator],deleteTutorials)
router.delete("/:id", [authJwt.verifyToken],deleteTutorialByID)
router.put("/:id",[authJwt.verifyToken, authJwt.isModerator],updateTutorialByID)
export default router //