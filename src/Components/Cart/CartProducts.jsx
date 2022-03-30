import React from 'react'

const CartProducts = () => {
    return (
        <>
            <div className="cart-products">
                <div className="cart-product-card flex-all-cen">
                    <div className="card-img">
                        <img src="/images/cart-product1.png" alt="Cart-img"/>
                    </div>
                    <div className="card-details">
                        <div className="title md-h">Addidas Shoes</div>
                        <div className="price">
                            <span className="lg-text">$299</span>
                            <strike className="md-text">$399</strike>
                        </div>
                        <div className="offers">
                            <span className="md-text">50% OFF</span>
                        </div>
                        <div className="quantity">
                            <span className="sm-text title">Quantity :</span>
                            <span><i className="fa fa-plus-circle sm-text icon"></i></span>
                            <span className="sm-text value">1</span>
                            <span><i className="fa fa-minus-circle sm-text icon"></i></span>
                        </div>
                        <div className="buttons">
                            <button className="btn-primary btn" onclick="location.href='wishlist.html'">Move to Wishlist</button>
                            <button className="btn-outline-secondary btn">Remove From Cart</button>
                        </div>
                    </div>
                </div>
                <div className="cart-product-card flex-all-cen">
                    <div className="card-img">
                        <img src="/images/cart-product1.png" alt="Cart-img"/>
                    </div>
                    <div className="card-details">
                        <div className="title md-h">Addidas Shoes</div>
                        <div className="price">
                            <span className="lg-text">$299</span>
                            <strike className="md-text">$399</strike>
                        </div>
                        <div className="offers">
                            <span className="md-text">50% OFF</span>
                        </div>
                        <div className="quantity">
                            <span className="sm-text title">Quantity :</span>
                            <span><i className="fa fa-plus-circle sm-text icon"></i></span>
                            <span className="sm-text value">1</span>
                            <span><i className="fa fa-minus-circle sm-text icon"></i></span>
                        </div>
                        <div className="buttons">
                            <button className="btn-primary btn" onclick="location.href='wishlist.html'">Move to Wishlist</button>
                            <button className="btn-outline-secondary btn">Remove From Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProducts