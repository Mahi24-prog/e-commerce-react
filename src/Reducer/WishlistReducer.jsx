import { useProduct } from "../Contexts/ProductContext";

const WishlistReducer = (state,action) =>{
    const {productsData} = useProduct();
    switch(action.type){
        case 'ADD_TO_WISHLIST':return ({...state, wishlistCount:state.wishlistCount+1,
            wishlistProductList:[...state.wishlistProductList,productsData.filter(product => product.id === action.payload)[0]]
        })
        case 'REMOVE_FROM_WISHLIST':
            return ({...state,wishlistCount: state.wishlistCount -= 1,wishlistProductList:state.wishlistProductList.filter(product => (product.id != action.payload))})   
        default:return ({...state})
    }
}

export default WishlistReducer