const farmerProfileReducer = (state = [], action) => {
    switch (action.type) {
       case 'SET_FARMER_PROFILE':
           return action.payload
        default:
            return state;
    }
}

export default farmerProfileReducer;