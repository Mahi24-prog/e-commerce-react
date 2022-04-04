import { useProduct } from "../Contexts/ProductContext";

const WishlistReducer = (state,action) =>{
    const {productsData} = useProduct();
    switch(action.type){
        case 'Add_To_Wishlist':return ({...state, wishlistCount:state.wishlistCount+1,
            wishlistProductList:[...state.wishlistProductList,productsData.filter(product => product.id === action.payload)[0]]
        })
        case 'Remove_From_Wishlist':
            console.log("Wishlist")
            return ({...state,wishlistCount: state.wishlistCount -= 1,wishlistProductList:state.wishlistProductList.filter(product => (product.id != action.payload))})   
        default:return ({...state})
    }
}

export default WishlistReducer