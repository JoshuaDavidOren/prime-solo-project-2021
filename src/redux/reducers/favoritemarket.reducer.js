const favoriteMarketReducer = (state = [], action) => {
    switch (action.type) {
       case 'SET_FAVORITE_MARKET':
           return action.payload
        default:
            return state;
    }
}

export default favoriteMarketReducer;