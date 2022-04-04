import { createContext, useContext , useReducer} from "react";
import WishlistReducer from "../Reducer/WishlistReducer";

const WishlistContext = createContext(0);

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({children}) => {
    const [state, wishlistDispatch] = useReducer(WishlistReducer,{wishlistCount:0, wishlistProductList:[]})

    return (
        <WishlistContext.Provider value={{state, wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}

export {WishlistProvider, useWishlist}