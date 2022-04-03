import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'
import { ProductReducer } from '../Reducer/ProductReducer';

const ProductContext = createContext(null);

const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([])
  const [state, dispatch] = useReducer(ProductReducer, { productsCategoryData: [],sortBy: null, starRating: "1_And_Above",
      priceFilterValue : 1000000, outOfStock: true, fastDelivery : false
  })

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/products", { method: "GET" })
        const json = await response.json()
        setProductsData(json.products)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  
  return (
    <ProductContext.Provider value={{ state,productsData, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, useProduct }