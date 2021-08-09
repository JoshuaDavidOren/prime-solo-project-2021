const farmerLocations = (state = [], action) => {
    switch (action.type) {
        case 'SET_FARMER_LOCATIONS':
          console.log('list of locations',action.payload);
          return state = action.payload.data
        default:
          return state;
      }
}

export default farmerLocations;