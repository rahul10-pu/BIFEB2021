import {checkDuplicateUsernameOrEmail, checkRolesExisted} from '../middleware/verifySignUp.js'
import {signin, signup} from '../controllers/auth.controller.js'
import express from 'express';
const router=express.Router();

router.post("/signup", [
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
], signup)

router.post("/signin", signin)
export default router //
// export const authenticate= (server)=>{
    // server.use((req, res, next)=>{
    //     res.header(
    //         "Access-Control-Allow-Headers",
    //         "x-access-token",
    //         "Origin",
    //         "Content-Type",
    //         "Accept"
    //     );
    //     next()
    // })
//     server.post("/api/auth/signup", [
//         checkDuplicateUsernameOrEmail,
//         checkRolesExisted
//     ], signup)
//     server.post("/api/auth/signin", signin)
// }