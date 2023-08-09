const express = require("express")
const { createHotel, getAllHotel, singleHotel, } = require("../controller/hotel.controller")
const { verifySeller } = require("../middleware/authenticate.middleware")

const hotelsRouter = express.Router()


hotelsRouter.post("/hotels",verifySeller ,createHotel)
hotelsRouter.get("/hotels", getAllHotel)
hotelsRouter.get("/find/:id", singleHotel)


module.exports={hotelsRouter}