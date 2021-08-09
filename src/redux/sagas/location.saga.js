import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getFarmerCoordinates() {
    try{
      const locationsList = yield axios.get('/api/locations/farmer');
      console.log('what is this',locationsList.data);
      yield put({type: 'SET_FARMER_LOCATIONS', payload: locationsList})
      
    }
    catch(error) {
      console.log('Error Geting locations', error);
    }
  }

  function* getMarketCoordinates() {
    try{
      const locationsList = yield axios.get('/api/locations/market');
      console.log('what is this',locationsList.data);
      yield put({type: 'SET_MARKET_LOCATIONS', payload: locationsList})
      
    }
    catch(error) {
      console.log('Error Geting locations', error);
    }
  }

  function* addVendor(action) {
    try{
        yield axios.post( '/api/locations/updatelocation', action.payload);
        yield put({type: 'FETCH_FARMER_LOCATIONS'})
      }
      catch(error) {
        console.log('Error adding vendor', error);
      }
  }


  function* locationSaga () {
    yield takeEvery('FETCH_FARMER_LOCATIONS', getFarmerCoordinates);
    yield takeEvery('FETCH_MARKET_LOCATIONS', getMarketCoordinates);
    yield takeEvery('ADD_VENDOR', addVendor)
    }
export default locationSaga;