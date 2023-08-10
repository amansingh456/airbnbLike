import { Navbar } from "../components/Navbar"
import AllData from "./AllData"
import SmallIcons from "../components/SmallIcons"


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
    <Navbar/>
    <SmallIcons/>
    <AllData/>
    </div>
  )
}

export default Home
