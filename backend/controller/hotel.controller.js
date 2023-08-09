const { HotelModel } = require("../model/hotel.model")
const getUserToken = require("../utils/getUserToken")

const createHotel = async(req,res,next)=>{
   const userData = getUserToken(req)

   const {name,city,title,address, photos,desc,price} = req.body
   try {
       const savedHotel = new HotelModel({owner:userData.id,name,city,title,address, photos,desc,price})
       await savedHotel.save()
       console.log("Hotel Registered SucsessFully..!")
       res.status(200).json(savedHotel)
   } catch (error) {
       // res.status(500).json({"error":error})
       next(error)
   }
}



const getAllHotel = async(req,res,next)=>{
   const {min,max, ...others} = req.query
   console.log('others: ', others);
   console.log('max: ', max);
   console.log('min: ', min);
   
   try {
       const getAllHotel =  await HotelModel.find({...others, price:{$gt:min | 1, $lt:max | 300000}})
        console.log("Here is the All Hotles....")
        res.status(200).json(getAllHotel) 
    } catch (error) {
        next(error)
            // res.status(500).json({"error":error}) 
    }
}


const singleHotel = async(req,res,next)=>{
   const getID = req.params.id
   try {
      const getHotel =  await HotelModel.findById(getID)
       console.log("Here is the Hotle....")
       res.status(200).json(getHotel)   
   } catch (error) {
           // res.status(500).json({"error":error}) 
           next(error)
   }
}


module.exports={createHotel,getAllHotel, singleHotel}