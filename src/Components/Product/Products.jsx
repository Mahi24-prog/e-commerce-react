import React, { useState, useEffect } from 'react'

const Products = () => {
    const [productsData, setProductsData] = useState([])

    useEffect(() => {

        (async () => {
            try {
                const response = await fetch('/api/products', { method: "GET" });
                const json = await response.json()
                setProductsData(json.products)
            } catch (err) {
                console.log(err)
            }
        })();
    }, [])
    return (
        <>
            <div className="products">
                <div className="products-card-wrapper d-flex flex-wrap">
                    {
                        productsData.map(product => (
                            <div className="card-with-badge sm-card card-product" key={product.id}>
                                <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                                <img className="card-img" src={product.image} alt="Image" />
                                <div className="card-body">
                                    <h2 className="card-title xsm-h">{product.name}</h2>
                                    <p className="card-subtitle sm-text gray-text">{product.desc}</p>
                                </div>
                                <div className="card-product-price">
                                    <h2 className="product-price">{product.price}</h2>
                                    <div className="product-offer sm-text"><strike>{product.strikePrice}</strike> <span>({product.offer})</span>
                                        <span className="rating">{product.rating}<i className="fas fa-star"></i></span>
                                    </div>
                                </div>
                                <div className="card-footer flex-col">
                                    <button className="btn-primary btn" onclick="location.href='cart.html'">Add to Cart</button>
                                    <button className="btn-secondary btn" onclick="location.href='wishlist.html'">Add to Wishlist</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Products