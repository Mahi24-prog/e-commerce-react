import { createContext, useContext , useReducer} from "react";
import CartReducer from "../Reducer/CartReducer";
const CartContext = createContext(0);

const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [state, cartDispatch] = useReducer(CartReducer,{cartCount:0, cartProductList:[]})

    return (
        <CartContext.Provider value={{state, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, useCart}