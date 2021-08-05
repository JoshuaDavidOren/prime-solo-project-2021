
const favoriteFarmerReducer = (state = [], action) => {
    switch (action.type) {
       case 'SET_FAVORITE_FARMER':
           return action.payload
        default:
            return state;
    }
}

export default favoriteFarmerReducer;