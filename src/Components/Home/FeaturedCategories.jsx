import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedCategories = () => {
    return (<>
        <div id="featured-categories">
        <div className="categories-wrapper flex-wrap">
            <div className="category" onclick="location.href='Pages/product.html'">
            <Link to="/product">
                <img src="/images/category1.png" alt=""/>
            </Link>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            <div className="category" onclick="location.href='Pages/product.html'">
                <img src="/images/category1.png" alt=""/>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            <div className="category" onclick="location.href='Pages/product.html'">
                <img src="/images/category1.png" alt=""/>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            <div className="category" onclick="location.href='Pages/product.html'">
                <img src="/images/category1.png" alt=""/>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            <div className="category" onclick="location.href='Pages/product.html'">
                <img src="/images/category1.png" alt=""/>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            <div className="category" onclick="location.href='Pages/product.html'">
                <img src="/images/category1.png" alt=""/>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            <div className="category" onclick="location.href='Pages/product.html'">
                <img src="/images/category1.png" alt=""/>
                <h1 className="title sm-h text-center">Shoes1</h1>
            </div>
            
        </div>
    </div>
    </>
    )
}

export default FeaturedCategories