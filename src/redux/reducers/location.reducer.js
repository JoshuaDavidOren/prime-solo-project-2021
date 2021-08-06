const mapLocations = (state = [], action) => {
    switch (action.type) {
        case '|wall|alone|case|':
          console.log('list of locations',action.payload);
          return state = action.payload.data
        default:
          return state;
      }
}

export default mapLocations;