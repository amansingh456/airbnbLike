const mongoose = require("mongoose")

const hotelSchema = mongoose.Schema({
    owner:{type:mongoose.Schema.ObjectId,ref:"username", required:true},
    name:{type:String,required:true},
    city:{type:String,required:true},
    title:{type:String,required:true},
    address:{type:String,required:true},
    photos:[{type:String}],
    desc:{type:String, required:true},
    price:{type:Number, required:true},
})


const HotelModel =  mongoose.model("hotel",hotelSchema)

module.exports={HotelModel}