import { useContext } from "react"
import { HotelContext } from "../context/HotelProvider"
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Image from "../components/Image"

const AllData = () => {
   const {hotels, loading} = useContext(HotelContext)
   if(loading){
      return <Loader/>
   }
  return (
   <div className="mt-6 px-10 grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-6 gap-y-8 ">
   {hotels.length > 0 &&
     hotels.map((hotel) => (
       <Link to={`/hotels/${hotel._id}`} key={hotel._id} className=" rounded-2xl hotelsAllData">
         <div className="bg-gray-500 mb-2 rounded-2xl flex ">
           {hotel.photos?.[0] && <Image src={hotel.photos?.[0]} />}
         </div>
         <h2 className="font-bold pl-1">{hotel.address}</h2>
         <h3 className="text-sm text-gray-500 pl-1">{hotel.title}</h3>
         <div className="mt-1 pb-1 pl-1">
           <span className="font-semibold">₹{hotel.price} </span>
           per night
         </div>
       </Link>
     ))}
 </div>
  )
}

export default AllData
