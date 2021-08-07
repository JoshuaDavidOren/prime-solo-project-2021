import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavoriteFarmer(){
    try{
    const response = yield axios.get('/api/favorite/farmer');
    yield put({type: "SET_FAVORITE_FARMER", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing favorite', err);
    }
}

function* fetchFavoriteMarket(){
    try{
    const response = yield axios.get('/api/favorite/market');
    yield put({type: "SET_FAVORITE_MARKET", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing favorite', err);
    }
}

function* addFavoriteFarmer(action){
    try{
        yield axios.post( '/api/favorite/farmer', action.payload);
        yield put({type: 'GET_FAVORITE_FARMER_DATA'});
    } 
    catch(error) {
        console.log('Error POSTing to database', error);
    }
}

function* deleteFavoriteFarmer(action){
    console.log(action.payload);
    try{
    yield axios.delete(`/api/favorite/farmer/${action.payload}`);
    yield put({type: 'GET_FAVORITE_FARMER_DATA'});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* favoriteSaga(){
    yield takeEvery('GET_FAVORITE_FARMER_DATA', fetchFavoriteFarmer); 
    yield takeEvery('GET_FAVORITE_MARKET_DATA', fetchFavoriteMarket);
    yield takeEvery('ADD_FAVORITE_FARMER', addFavoriteFarmer);
    yield takeEvery('DELETE_FROM_FAVORITES', deleteFavoriteFarmer)
}

export default favoriteSaga;