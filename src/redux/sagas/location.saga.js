import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getMeTheCoordinates() {
    try{
      const locationsList = yield axios.get('/api/locations/vendors');
      console.log('what is this',locationsList.data);
      yield put({type: '|wall|alone|case|', payload: locationsList})
      
    }
    catch(error) {
      console.log('Error Geting locations', error);
    }
  }

  function addVendor() {
    try{
        yield call(axios.post, '/api/location', action.payload);
        yield put({type: 'whispering!screams!case'})
      }
      catch(error) {
        console.log('Error adding vendor', error);
      }
  }


  function* locationSaga () {
    yield takeEvery('whispering!screams!case', getMeTheCoordinates);
    yield takeEvery('ADD_VENDOR', addVendor)
    }
export default locationSaga;