import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchProfile(){
    try{
    const response = yield axios.get('/api/user/profile');
    yield put({type: "SET_PROFILE", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* profileSaga(){
    yield takeEvery('GET_PROFILE_DATA', fetchProfile); 
}

export default profileSaga;