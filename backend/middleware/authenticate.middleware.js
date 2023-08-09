const jwt = require("jsonwebtoken")
const { createError } = require("../utils/customError")
require("dotenv").config()


const verifyToken = (req,res,next)=>{
   const token = req.cookies.access_token
   if(!token) return next(createError(401,"You are not Authenticated...!"))
   jwt.verify(token,process.env.JWT_KEY,(err, user)=>{
       if(err) return next(createError(403,"Token is not valid"))

       req.user = user
       next()
   })    
}




const verifyUser = (req,res,next)=>{
   verifyToken(req,res,()=>{
       if(req.user.id===req.params.id || req.user.isSeller){
           next()
       }
       else{
           return next(createError(403,"You are not authorised"))
       } 
   })
}

const verifySeller = (req,res,next)=>{
   verifyToken(req,res,()=>{
       if(req.user.isSeller){
           next()
       }
       else{
           return next(createError(403,"You are not authorised as Seller"))
       } 
   })
}


module.exports={verifySeller}