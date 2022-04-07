import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'
import { useWishlist } from '../../Contexts/wishlistContext'
const WishListProducts = () => {
    const { state : {cartProductList} , cartDispatch } = useCart();
    const { state : {wishlistCount,wishlistProductList} , wishlistDispatch } = useWishlist();
    return (
        <>
            <div id="product-container" className="d-flex">
                <div className="products">
                    <h2 className="md-h text-center">My Wishlist ({wishlistCount})</h2>
                    <div className="products-card-wrapper d-flex flex-wrap">
                        {   wishlistProductList.length != 0 ?
                            wishlistProductList.map(product => (
                            <div className="card-with-badge sm-card card-product" key={product.id}>
                                <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                                <img className="card-img" src={product.image} alt="Image" />
                                <div className="card-body">
                                    <h2 className="card-title xsm-h">{product.name}</h2>
                                    <p className="card-subtitle sm-text gray-text">Men Fluorescent Green Woven Design Sneakers</p>
                                </div>
                                <div className="card-product-price">
                                    <h2 className="product-price">RS.{product.price}</h2>
                                    <div className="product-offer sm-text"><strike>Rs.{product.strikePrice}</strike> <span>({product.offer})</span>
                                        <span className="rating">{product.rating}<i className="fas fa-star"></i></span>
                                    </div>
                                </div>
                                <div className="card-footer flex-col">
                                    {
                                        cartProductList.some(cartProduct => cartProduct.id === product.id) ?
                                            <Link to="/cart" className='card-btn-link'>
                                                <button className="btn-outline-primary btn btn-outline">Go to Cart</button>
                                            </Link> :
                                            <button className="btn-primary btn" onClick={() => cartDispatch({ type: 'ADD_TO_CART', payload: product.id })}>Add to Cart</button>
                                    }
                                    <Link to='/wishlist' className="card-btn-link"><button className="btn-secondary btn"
                                        onClick={() => wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id })}
                                    >Remove from Wishlist</button></Link>
                                </div>
                            </div>
                        )):<div>
                            <img className='wishlist-empty-img'
                            src="/images/emptyWishlist.svg" alt="Wishlist Empty"/>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishListProducts