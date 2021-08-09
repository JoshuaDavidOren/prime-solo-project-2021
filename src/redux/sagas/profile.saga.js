import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchProfile(action){
    console.log('WWWWHHHYYYYY',action);
    try{
    const response = yield axios.get(`/api/user/profile/${action.payload}`);
    yield put({type: "SET_PROFILE", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* fetchFarmerProfile(action){
    try{
        console.log('this is an id',action.payload);
        const id = Number(action.payload);
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