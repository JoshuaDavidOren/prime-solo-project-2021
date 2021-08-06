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

function* fetchFarmerProfile(action){
    try{
        console.log('this is an id',action.payload.id);
        const id = Number(action.payload.id);
    const response = yield axios.get(`/api/profile/farmer/${id}`);
    yield put({type: "SET_FARMER_PROFILE", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* profileSaga(){
    yield takeEvery('GET_PROFILE_DATA', fetchProfile); 
    yield takeEvery('GET_PROFILE_DATA_FARMER', fetchFarmerProfile);
}

export default profileSaga;