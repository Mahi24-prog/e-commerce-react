import React from 'react'
const WishListProducts = () => {
    return (
        <>
            <div id="product-container" className="d-flex">
                <div className="products">
                    <h2 className="md-h text-center">My Wishlist</h2>
                    <div className="products-card-wrapper d-flex flex-wrap">
                        <div className="card-with-badge sm-card card-product">
                            <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                            <img className="card-img" src="/images/product1.png" alt="Image" />
                            <div className="card-body">
                                <h2 className="card-title xsm-h">Crew STREET</h2>
                                <p className="card-subtitle sm-text gray-text">Men Fluorescent Green Woven Design Sneakers</p>
                            </div>
                            <div className="card-product-price">
                                <h2 className="product-price">RS.999</h2>
                                <div className="product-offer sm-text"><strike>Rs.1999</strike> <span>(55% OFF)</span>
                                    <span className="rating">4.5<i className="fas fa-star"></i></span>
                                </div>
                            </div>
                            <div className="card-footer flex-col">
                                <button className="btn-primary btn" onclick="location.href='cart.html'">Add to Cart</button>
                                <button className="btn-secondary btn" >Remove from Wishlist</button>
                            </div>
                        </div>
                        <div className="card-with-badge sm-card card-product">
                            <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                            <img className="card-img" src="/images/product1.png" alt="Image" />
                            <div className="card-body">
                                <h2 className="card-title xsm-h">Crew STREET</h2>
                                <p className="card-subtitle sm-text gray-text">Men Fluorescent Green Woven Design Sneakers</p>
                            </div>
                            <div className="card-product-price">
                                <h2 className="product-price">RS.999</h2>
                                <div className="product-offer sm-text"><strike>Rs.1999</strike> <span>(55% OFF)</span>
                                    <span className="rating">4.5<i className="fas fa-star"></i></span>
                                </div>
                            </div>
                            <div className="card-footer flex-col">
                                <button className="btn-primary btn" onclick="location.href='cart.html'">Add to Cart</button>
                                <button className="btn-secondary btn" >Remove from Wishlist</button>
                            </div>
                        </div>
                        <div className="card-with-badge sm-card card-product">
                            <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                            <img className="card-img" src="/images/product1.png" alt="Image" />
                            <div className="card-body">
                                <h2 className="card-title xsm-h">Crew STREET</h2>
                                <p className="card-subtitle sm-text gray-text">Men Fluorescent Green Woven Design Sneakers</p>
                            </div>
                            <div className="card-product-price">
                                <h2 className="product-price">RS.999</h2>
                                <div className="product-offer sm-text"><strike>Rs.1999</strike> <span>(55% OFF)</span>
                                    <span className="rating">4.5<i className="fas fa-star"></i></span>
                                </div>
                            </div>
                            <div className="card-footer flex-col">
                                <button className="btn-primary btn" onclick="location.href='cart.html'">Add to Cart</button>
                                <button className="btn-secondary btn" >Remove from Wishlist</button>
                            </div>
                        </div>
                        <div className="card-with-badge sm-card card-product">
                            <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                            <img className="card-img" src="/images/product1.png" alt="Image" />
                            <div className="card-body">
                                <h2 className="card-title xsm-h">Crew STREET</h2>
                                <p className="card-subtitle sm-text gray-text">Men Fluorescent Green Woven Design Sneakers</p>
                            </div>
                            <div className="card-product-price">
                                <h2 className="product-price">RS.999</h2>
                                <div className="product-offer sm-text"><strike>Rs.1999</strike> <span>(55% OFF)</span>
                                    <span className="rating">4.5<i className="fas fa-star"></i></span>
                                </div>
                            </div>
                            <div className="card-footer flex-col">
                                <button className="btn-primary btn" onclick="location.href='cart.html'">Add to Cart</button>
                                <button className="btn-secondary btn" >Remove from Wishlist</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WishListProducts