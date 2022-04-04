import React from 'react'
import { useCart } from '../../Contexts/CartContext'

const CartProducts = () => {
    const { state : {cartProductList}, cartDispatch } = useCart();
    
    return (
        <>
            <div className="cart-products">
                {  cartProductList.length != 0 ?
                    cartProductList.map(product => (
                       
                        <div className="cart-product-card flex-all-cen" key={product.id}>
                            <div className="card-img">
                                <img src={product.image} alt="Cart-img" />
                            </div>
                            <div className="card-details">
                                <div className="title md-h">{product.name}</div>
                                <div className="price">
                                    <span className="lg-text">RS.{product.price}</span>
                                    <strike className="md-text">RS.{product.strikePrice}</strike>
                                </div>
                                <div className="offers">
                                    <span className="md-text">{product.offer}</span>
                                </div>
                                <div className="quantity">
                                    <span className="sm-text title">Quantity :</span>
                                    <span onClick={()=> cartDispatch({type:"Dec_Quantity", payload:product.id})}>
                                        <i className="fa fa-minus-circle sm-text icon"></i>
                                    </span>
                                    <span className="sm-text value">{product.quantity}</span>
                                    <span onClick={()=> cartDispatch({type:"Inc_Quantity", payload:product.id})}>
                                        <i className="fa fa-plus-circle sm-text icon"></i>
                                    </span>
                                </div>
                                <div className="buttons">
                                    <button className="btn-primary btn" onclick="location.href='wishlist.html'">Move to Wishlist</button>
                                    <button onClick={()=> cartDispatch({type:"Remove_From_Cart", payload:product.id})}
                                    className="btn-outline-secondary btn">Remove From Cart</button>
                                </div>
                            </div>
                        </div>
                    )):<div>
                        <img className='empty-cart' src="/images/emptyCart.svg" alt="cartEmpty"/>
                    </div>
                }

            </div>
        </>
    )
}

export default CartProducts