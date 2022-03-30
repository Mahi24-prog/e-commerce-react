import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Home/Banner'
import FeaturedCategories from '../../Components/Home/FeaturedCategories'
import NewArrivals from '../../Components/Home/NewArrivals'

const Home = () => {
  return (<>
    <Navbar/>
    <FeaturedCategories/>
    <Banner/>
    <NewArrivals/>
    <Footer/>
  </>)
}

export default Home