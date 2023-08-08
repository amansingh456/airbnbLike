const handleError = (err,req,res,next)=>{
   const errorStatus = err.status || 500
   const errorMessage = err.message || "Something Went Wrong"
   return res.status(errorStatus).json({
       success:false,
       status:errorStatus,
       message:errorMessage,
       stack:err.stack
   })
}

module.exports={handleError}