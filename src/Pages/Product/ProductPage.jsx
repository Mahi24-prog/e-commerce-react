import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Filters from '../../Components/Product/Filters'
import Products from '../../Components/Product/Products'

const ProductPage = () => {
  return (
    <>
      <Navbar/>
        <div id="product-container" className="d-flex">
          <Filters/>
          <Products/>   
        </div>
      <Footer/>
    </>
  )
}

export default ProductPage