const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isSeller:{type:Boolean,default:false}
}
)


const UserModel =  mongoose.model("userAirbnb",userSchema)

module.exports={UserModel}