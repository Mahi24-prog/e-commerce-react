import { useProduct } from "../Contexts/ProductContext";

const CartReducer = (state,action) =>{
    const {productsData} = useProduct();
    switch(action.type){
        case 'ADD_TO_CART':return ({...state, cartCount:state.cartCount+1,
            cartProductList:[...state.cartProductList,productsData.filter(product => product.id === action.payload)[0]]
        })
        case 'INC_QUANTITY':
            let incPrdIndex = state.cartProductList.findIndex((obj => obj.id === action.payload));
            state.cartProductList[incPrdIndex].quantity += 1
            return ({...state, 
            cartProductList:[...state.cartProductList]
        })
        case 'DEC_QUANTITY':
            let decPrdIndex = state.cartProductList.findIndex((obj => obj.id === action.payload));
            if(state.cartProductList[decPrdIndex].quantity > 1){state.cartProductList[decPrdIndex].quantity -= 1}
            return ({...state, 
            cartProductList:[...state.cartProductList]
        })
        case 'REMOVE_FROM_CART':
            return ({...state,cartCount: state.cartCount -= 1,cartProductList:state.cartProductList.filter(product => (product.id != action.payload))})   
        default:return ({...state})
    }
}

export default CartReducer