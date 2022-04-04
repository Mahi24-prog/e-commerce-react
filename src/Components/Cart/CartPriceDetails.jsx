import React from 'react'
import { useCart } from '../../Contexts/CartContext'
  

const getPriceDetails = (cartProductList) => {
  let productsPrice = 0
  let discount = 0
  let deliveryCharg = 0
  cartProductList.map(product => {
    productsPrice = productsPrice += (product.price * product.quantity)
    discount = discount + (product.strikePrice * product.quantity) - (product.price * product.quantity)
    deliveryCharg = deliveryCharg + 20;
  })
  deliveryCharg = productsPrice >= 500 ? 0 : deliveryCharg
  const totalPrice = productsPrice - discount + deliveryCharg
  return {productsPrice,discount,deliveryCharg,totalPrice}
}

const CartPriceDetails = () => {
  const {state : {cartCount,cartProductList}} = useCart()
  
  const {productsPrice,discount,deliveryCharg, totalPrice} = getPriceDetails(cartProductList)
  return (
    <>
        <div className="cart-price-details">
           <div className="title md-h">Price Details</div>
           <hr className="line"/>
           <div className="price space-bet">
               <span className="sm-text">Price ({cartCount} items)</span>
               <span className="sm-text">₹{productsPrice}</span>
           </div>
           <div className="discount space-bet">
                <span className="sm-text">Discount</span>
                <span className="sm-text">-₹{discount}</span>
            </div>
            <div className="delivery-charg space-bet">
                <span className="sm-text">Delivery Charg</span>
                <span className="sm-text">₹{deliveryCharg}</span>
            </div>
            <hr className="line"/>
            <div className="total-amount space-bet">
                <span className="md-text">Total Amount</span>
                <span className="md-text">₹{totalPrice}</span>
            </div>
            <hr className="line"/>
            <h3 className="sm-text">You will save ₹{discount} on this Order</h3>
            <button className="btn-primary btn">Place Order</button>
       </div>
    </>
  )
}

export default CartPriceDetails