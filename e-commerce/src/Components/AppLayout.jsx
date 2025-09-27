import { Outlet } from "react-router"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Whatappbtn from "./Whatappbtn"

const AppLayout = () => {
  return (
    <div>
        <Navbar/>
        <Whatappbtn />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout