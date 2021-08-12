const marketLocations = (state = [], action) => {
    switch (action.type) {
        case 'SET_MARKET_LOCATIONS':
          console.log('list of locations',action.payload);
          return state = action.payload.data
        default:
          return state;
      }
}

export default marketLocations;

