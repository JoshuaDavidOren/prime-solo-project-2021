const allProductsReducer = (state = [], action) => {
    switch (action.type) {
       case 'SET_ALL_PRODUCTS':
           return action.payload
        default:
            return state;
    }
}

export default allProductsReducer;