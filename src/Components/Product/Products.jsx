import React, { useState, useEffect } from 'react'
import { useProduct } from '../../Contexts/ProductContext'
import { useCategory } from '../../Contexts/CategoryContext';

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


    return (
        <>
            <div class="products">
                <div class="products-card-wrapper d-flex flex-wrap">
                    {
                        filterdData.map(product => (
                            <div class="card-with-badge sm-card card-product" key={product.id}>
                                <i class="fa fa-heart-o fa-1x like-filled-icon-btn card-icon" aria-hidden="true"></i>
                                <img class="card-img" src={product.image} alt="Image" />
                                <div class="card-body">
                                    <h2 class="card-title xsm-h">{product.name}</h2>
                                    <p class="card-subtitle sm-text gray-text">{product.desc}</p>
                                </div>
                                <div class="card-product-price">
                                    <h2 class="product-price">RS.{product.price}</h2>
                                    <div class="product-offer sm-text"><strike>Rs.{product.strikePrice}</strike> <span>({product.offer})</span>
                                        <span class="rating">{product.rating}<i class="fas fa-star"></i></span>
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