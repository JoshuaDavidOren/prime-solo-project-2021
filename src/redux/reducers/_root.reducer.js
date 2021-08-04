import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './login.reducer';
import locationReducer from './location.reducer';
import farmerReducer from './farmer.reducer';
import profileReducer from './profile.reducer';
import productReducer from './product.reducer';
import favoriteReducer from './favorite.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  farmerReducer,
  user, // will have an id and username if someone is logged in
  locationReducer,
  profileReducer,
  productReducer,
  favoriteReducer
});

export default rootReducer;
