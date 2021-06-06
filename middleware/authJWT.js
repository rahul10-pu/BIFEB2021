//verifyToken
//isAdmin
//isModerator
//isModeratorOrAdmin

import jwt from 'jsonwebtoken'
import  {secret}  from '../config/auth.config.js'
import db from '../models/index.js';
const User = db.users
//"x-access-token": "jwt token"
const verifyToken=(req, res, next)=>{
    console.log(req.headers)
    console.log(req.headers["x-access-token"])
    let token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send({
            message:"No token provided, Access forbidden"
        })
    }
    jwt.verify(token, secret, (err, decode)=>{
        if(err){
            return res.status(401).send({
                message: "Unauthorized!"
            })
        }
        req.userId=decode.id
        next();
    })
}

const isAdmin = (req, res, next)=>{
    User.findByPk(req.userId)
        .then(
            (user)=>{
                user.getRoles()
                    .then(
                        (roles)=>{
                            for(let i=0;i<roles.length;i++){
                                if(roles[i].name==="admin")
                                console.log("User is admin")
                                next()
                                return
                            }
                       
                            res.status(403).send({
                                message:"Forbidden"
                            })
                        }
                    )
            }
        )
}
const isModerator = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require Moderator Role!"
        });
      });
    });
  };
  
  const isModeratorOrAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
  
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require Moderator or Admin Role!"
        });
      });
    });
  };
  
  export const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isModerator: isModerator,
    isModeratorOrAdmin: isModeratorOrAdmin
  };
