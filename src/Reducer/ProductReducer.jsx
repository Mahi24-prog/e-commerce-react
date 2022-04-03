export function ProductReducer(state, action) {
    switch (action.type) {
        case "SORT": return ({ ...state, sortBy: action.payload })
        case "FilterRating" : return({...state, starRating: action.payload})
        case "CategoryFilter" : 
            console.log(action.payload)
            return({...state, productsCategoryData: action.payload})
        case "PriceFilter": return({...state, priceFilterValue: action.payload})
        case "Toggle_Stock": return({...state, outOfStock: !state.outOfStock})
        case "Toggle_Delivery": return({...state, fastDelivery: !state.fastDelivery})
        case "Clear": 
        console.log("Click")
        return({...state, sortBy: null, starRating: "1_And_Above",
                            priceFilterValue : 1000000, outOfStock: true, fastDelivery : false})
        default: return ({...state});
    }
}
