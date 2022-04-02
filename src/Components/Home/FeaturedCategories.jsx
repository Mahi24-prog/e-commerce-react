import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const FeaturedCategories = () => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/api/categories", { method: "GET" })
                const json = await response.json()
                setCategoryData(json.categories)
            } catch (error) {
                console.log(error)
            }
        }
        )();
    }, []) 
    return (<>
        <div id="featured-categories">
            <div className="categories-wrapper flex-wrap">
                {
                    categoryData.map(category => (
                        <div className="category">
                            <Link to="/product">
                                <img src={category.image} alt="category image"/>
                            </Link>
                            <h1 className="title sm-h text-center">{category.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
    )
}

export default FeaturedCategories