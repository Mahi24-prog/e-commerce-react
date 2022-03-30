import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import CartPriceDetails from '../../Components/Cart/CartPriceDetails'
import CartProducts from '../../Components/Cart/CartProducts'

const CartPage = () => {
  return (
    <>
        <Navbar />
        <h2 className="md-h text-center">My Cart (2)</h2>
        <div id="cart-container" className="d-flex flex-wrap">
          <CartProducts />
          <CartPriceDetails />
        </div>
        <Footer />
    </>
  )
}

export default CartPage