import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useCategory } from '../../Contexts/CategoryContext'
import { useProduct } from '../../Contexts/ProductContext'
import CircularProgress from '@material-ui/core/CircularProgress';
const FeaturedCategories = () => {
    const [loader, setLoader] = useState(true)
    const [categoryData, setCategoryData] = useState([])
    const {productsData} = useProduct()
    const {setCategoryFilteredData} = useCategory()
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("/api/categories", { method: "GET" })
                const json = await response.json()
                setLoader(false)
                setCategoryData(json.categories)
            } catch (error) {
                console.log(error)
            }
        }
        )();
    }, []) 
    return (<>
        <div id="featured-categories">
            {loader && <CircularProgress className='loader'/>}
            <div className="categories-wrapper flex-wrap">
                {   
                    categoryData.map(category => (
                        <div className="category" key={category._id}>
                            <Link to="/product">
                                <img src={category.image} alt="category image" 
                                    onClick= {() => setCategoryFilteredData(productsData.filter(product => product.category === category.name))
                                }
                                />
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