import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useProduct } from '../../Contexts/ProductContext'
import { useCategory } from '../../Contexts/CategoryContext';
import { useCart } from '../../Contexts/CartContext';
import { useWishlist } from '../../Contexts/wishlistContext';

const getSortedData = (productList, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
        return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
        return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
}

const getFiltedData = (productList, { starRating, priceFilterValue, outOfStock, fastDelivery }) => {
    return productList
        .filter((product) => product.price <= priceFilterValue)
        .filter((product) => product.rating >= parseInt(starRating.charAt(0)))
        .filter((product) => outOfStock ? true : !product.outOfStock)
        .filter((product) => fastDelivery ? product.fastDelivery : true)
}

const Products = () => {
    const { state: { sortBy, starRating, priceFilterValue, outOfStock, fastDelivery } } = useProduct();
    const { categoryFilteredData } = useCategory()
    const sortedData = getSortedData(categoryFilteredData, sortBy)
    const filterdData = getFiltedData(sortedData, { starRating, priceFilterValue, outOfStock, fastDelivery })
    const { state : {cartProductList}, cartDispatch } = useCart();
    const { state : {wishlistProductList} , wishlistDispatch } = useWishlist();

    return (
        <>
            <div className="products">
                <div className="products-card-wrapper d-flex flex-wrap">
                    {
                        filterdData.map(product => (
                            <div className="card-with-badge sm-card card-product" key={product.id}>
                                <i className="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                                <img className="card-img" src={product.image} alt="Image" />
                                <div className="card-body">
                                    <h2 className="card-title xsm-h">{product.name}</h2>
                                    <p className="card-subtitle sm-text gray-text">{product.desc}</p>
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
                                                <button className="btn-outline-primary btn outline-btn">Go to Cart</button>
                                            </Link> :
                                            <button className="btn-primary btn" onClick={() => cartDispatch({ type: 'Add_To_Cart', payload: product.id })}>Add to Cart</button>
                                    }
                                    {
                                        wishlistProductList.some(wishlistProduct => wishlistProduct.id === product.id) ?
                                            <Link to="/wishlist" className='card-btn-link'>
                                                <button className="btn-outline-secondary btn btn-outline">Go to Wishlist</button>
                                            </Link> :
                                            <button className="btn-secondary btn"
                                                onClick={() => wishlistDispatch({ type: "Add_To_Wishlist", payload: product.id })}>Add to Wishlist</button>
                                    }
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