import React from 'react'
import Navbar from '../Components/Navbar'
import CarouselsHome from '../Components/CarouselsHome'
import Footer from '../Components/Footer'
import Cart from '../Components/Cart'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <CarouselsHome />
        <Cart />
        <Footer />
    </div>
  )
}

export default Home