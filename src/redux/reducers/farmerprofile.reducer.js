const farmerProfileReducer = (state = {}, action) => {
    // console.log('THE profile',action.payload[0].user_id)
    switch (action.type) {
       case 'SET_FARMER_PROFILE':
           
           return (action.payload
            )
        default:
            return state;
    }

}

export default farmerProfileReducer;