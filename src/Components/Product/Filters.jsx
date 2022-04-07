import React, { useReducer } from 'react'
import { useProduct } from '../../Contexts/ProductContext'
const Filters = () => {
    const { state : {priceFilterValue, outOfStock, fastDelivery}, dispatch } = useProduct();
    return (
        <>
            <div className="filters">
                <div className="filter-header d-flex">
                    <h2 className="md-text">Filters</h2>
                    <button className='md-text btn'
                     onClick={() => dispatch({type : "CLEAR"})}
                    >CLEAR</button>
                </div>
                <div className="price filter-item">
                    <h3 className="sm-text filter-title">Price</h3>
                    <div className="price-label d-flex">
                        <span id="start">200</span>
                        <span id="mid">2500</span>
                        <span id="end">5000</span>
                    </div> 
                    <input className="price-slider" type="range" min="200" max="5000" value={priceFilterValue}
                        onChange={(e) => dispatch({type:"PRICE_FILTER", payload:e.target.value})}
                    />
                </div>
                <div className="filter-rating filter-item">
                    <h3 className="sm-text filter-title">Rating</h3>
                    <div className="filter-rating-item">
                        <input type="radio" id="4star&above" name="filter-rating" value="4star&above"
                            onChange={() => dispatch({ type: "FILTER_RATING", payload: "4_And_Above" })}
                        />
                        <label for="4star&above" className="sm-text">4 Star and above</label>
                    </div>
                    <div className="filter-rating-item"><input type="radio" id="3star&above" name="filter-rating" value="3star&above"
                        onChange={() => dispatch({ type: "FILTER_RATING", payload: "3_And_Above" })}
                    />
                        <label for="3star&above" className="sm-text">3 Star and above</label></div>
                    <div className="filter-rating-item"><input type="radio" id="2star&above" name="filter-rating" value="2star&above"
                        onChange={() => dispatch({ type: "FILTER_RATING", payload: "2_And_Above" })}
                    />
                        <label for="2star&above" className="sm-text">2 Star and above</label></div>
                    <div className="filter-rating-item"><input type="radio" id="1star&above" name="filter-rating" value="1star&above"
                        onChange={() => dispatch({ type: "FILTER_RATING", payload: "1_And_Above" })}
                    />
                        <label for="1star&above" className="sm-text">1 Star and above</label></div>

                </div>
                <div className="sortby filter-item">
                    <h3 className="sm-text filter-title">Sort By</h3>
                    <div className="sortby-item">
                        <input type="radio" id="price-lowtohigh" name="sort"
                            onChange={() => dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })}
                        />
                        <label for="price-lowtohigh" className="sm-text">Price - Low to High</label>
                    </div>
                    <div className="sortby-item"><input type="radio" id="price-hightolow" name="sort"
                        onChange={() => dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })}
                    />
                        <label for="price-hightolow" className="sm-text">Price - High to Low</label></div>
                </div>

                <div className="filter-item">
                    <h3 className="sm-text filter-title">Filter By</h3>
                    <div className="sortby-item">
                        <input type="checkbox" id="out-of-stock" name="filter"
                            checked={outOfStock}
                            onChange={() => dispatch({ type: "TOGGLE_STOCK"})}
                        />
                        <label for="out-of-stock" className="sm-text">Include Out Of Stock</label>
                    </div>
                    <div className="sortby-item">
                        <input type="checkbox" id="fast-delivery" name="filter"
                            checked={fastDelivery}
                            onChange={() => dispatch({ type: "TOGGLE_DELIVERY"})}
                        />
                        <label for="out-of-stock" className="sm-text">Fast Delivery Only</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters