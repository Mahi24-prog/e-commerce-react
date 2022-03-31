import React from 'react'
  
const CartPriceDetails = () => {
  return (
    <>
        <div className="cart-price-details">
           <div className="title md-h">Price Details</div>
           <hr className="line"/>
           <div className="price space-bet">
               <span className="sm-text">Price (2 items)</span>
               <span className="sm-text">$299</span>
           </div>
           <div className="discount space-bet">
                <span className="sm-text">Discount</span>
                <span className="sm-text">-$99</span>
            </div>
            <div className="delivery-charg space-bet">
                <span className="sm-text">Delivery Charg</span>
                <span className="sm-text">$20</span>
            </div>
            <hr className="line"/>
            <div className="total-amount space-bet">
                <span className="md-text">Total Amount</span>
                <span className="md-text">$220</span>
            </div>
            <hr className="line"/>
            <h3 className="sm-text">You will save $199 on this Order</h3>
            <button className="btn-primary btn">Place Order</button>
       </div>
    </>
  )
}

export default CartPriceDetails