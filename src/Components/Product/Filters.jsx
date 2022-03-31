import React from 'react'; 
const Filters = () => {
    return (
        <>
            <div className="filters">
            <div className="filter-header d-flex">
                <h2 className="md-text">Filters</h2>
                <h3 className="md-text">Clear</h3>
            </div>
            <div className="price filter-item">
                <h3 className="sm-text filter-title">Price</h3>
                <div className="price-label d-flex">
                    <span id="start">200</span>
                    <span id="mid">2500</span>
                    <span id="end">5000</span>
                </div>
                <input className="price-slider" type="range" min="200" max="5000" value="2500"/>
            </div>
            <div className="category filter-item">
                <h3 className="sm-text filter-title">Category</h3>
                <div className="category-item">
                    <input type="checkbox" name="sneakers" value="sneakers" checked/>
                    <label for="sneakers" className="sm-text">Sneakers</label>
                </div>
                <div className="category-item">
                    <input type="checkbox" name="casual-shoes" value="casual-shoes"/>
                    <label for="casual-shoes" className="sm-text">Casual Shoes</label>
                </div>
                <div className="category-item">
                    <input type="checkbox" name="sport-shoes" value="sport-shoes"/>
                    <label for="sport-shoes" className="sm-text">Sport Shoes</label>
                </div>
                <div className="category-item">
                    <input type="checkbox" name="Formal-shoes" value="Formal-shoes"/>
                    <label for="formal-shoes" className="sm-text">Formal Shoes</label>
                </div>
            </div>
            <div className="filter-rating filter-item">
                <h3 className="sm-text filter-title">Rating</h3>
                <div className="filter-rating-item">
                    <input type="radio" id="4star&above" name="filter-rating" value="4star&above" checked/>
                     <label for="4star&above" className="sm-text">4 Star and above</label>
                </div>
                <div className="filter-rating-item"><input type="radio" id="3star&above" name="filter-rating" value="3star&above"/>
                     <label for="3star&above" className="sm-text">3 Star and above</label></div>
                <div className="filter-rating-item"><input type="radio" id="2star&above" name="filter-rating" value="2star&above"/>
                     <label for="2star&above" className="sm-text">2 Star and above</label></div>
                <div className="filter-rating-item"><input type="radio" id="1star&above" name="filter-rating" value="1star&above"/>
                     <label for="1star&above" className="sm-text">1 Star and above</label></div>

            </div>
            <div className="sortby filter-item">
                <h3 className="sm-text filter-title">Sort By</h3>
                <div className="sortby-item">
                    <input type="radio" id="price-lowtohigh" name="filter-sortby" value="price-lowtohigh" checked/>
                     <label for="price-lowtohigh" className="sm-text">Price - Low to High</label>
                </div>
                <div className="sortby-item"><input type="radio" id="price-hightolow" name="filter-sortby" value="price-hightolow"/>
                     <label for="price-hightolow" className="sm-text">Price - High to Low</label></div>
            </div>
        </div>
        </>
    )
}

export default Filters