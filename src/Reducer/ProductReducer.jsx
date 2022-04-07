export function ProductReducer(state, action) {
    switch (action.type) {
        case "SORT": return ({ ...state, sortBy: action.payload })
        case "FILTER_RATING" : return({...state, starRating: action.payload})
        case "PRICE_FILTER": return({...state, priceFilterValue: action.payload})
        case "TOGGLE_STOCK": return({...state, outOfStock: !state.outOfStock})
        case "TOGGLE_DELIVERY": return({...state, fastDelivery: !state.fastDelivery})
        case "CLEAR": 
            return({...state, sortBy: null, starRating: "1_And_Above",
                            priceFilterValue : 1000000, outOfStock: true, fastDelivery : false})
        default: return ({...state});
    }
}
