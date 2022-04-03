import { useProduct } from "../Contexts/ProductContext";

const CartReducer = (state,action) =>{
    const {productsData} = useProduct();
    switch(action.type){
        case 'Add_To_Cart':return ({...state, cartCount:state.cartCount+1,
            cartProductList:[...state.cartProductList,productsData.filter(product => product.id === action.payload)[0]]
        })
        case 'Inc_Quantity':
            let incPrdIndex = state.cartProductList.findIndex((obj => obj.id === action.payload));
            state.cartProductList[incPrdIndex].quantity += 1
            return ({...state, 
            cartProductList:[...state.cartProductList]
        })
        case 'Dec_Quantity':
            let decPrdIndex = state.cartProductList.findIndex((obj => obj.id === action.payload));
            if(state.cartProductList[decPrdIndex].quantity > 1){state.cartProductList[decPrdIndex].quantity -= 1}
            return ({...state, 
            cartProductList:[...state.cartProductList]
        })
        case 'Remove_From_Cart':
            return ({...state,cartCount: state.cartCount -= 1,cartProductList:state.cartProductList.filter(product => (product.id != action.payload))})   
        default:return ({...state})
    }
}

export default CartReducer