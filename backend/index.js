const express = require("express")  
const cors  = require("cors")
const { connection } = require("./configs/db")
const { usersRouter } = require("./routes/user.routes")
const { handleError } = require("./middleware/errorHandler.middleware")
require("dotenv").config()


const app = express()
// cors middleware for connecting client side connection to server.
app.use(cors())
// middleware for handling json object
app.use(express.json())



app.get("/",(req,res)=>{
   res.send("AirBnb Like...!")
})
// middlerware for handling error
app.use(handleError)
app.use("/api/user", usersRouter)


app.listen(process.env.PORT,async()=>{
   try {
       await connection
       console.log("Connected To DB")
   } catch (error) {
       console.log('error: ', error);
   }
   console.log(`Server is running on port ${process.env.PORT} with ❤️`)
})