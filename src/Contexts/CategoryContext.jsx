import { createContext, useState, useContext} from "react";

const CategoryContext = createContext(null);

const useCategory = () => useContext(CategoryContext);

const CategoryProvider = ({children}) => {
    const [categoryFilteredData, setCategoryFilteredData] = useState([])

    return(
        <CategoryContext.Provider value = {{categoryFilteredData, setCategoryFilteredData}}>
            {children}
        </CategoryContext.Provider>
    )
}

export {CategoryProvider, useCategory}