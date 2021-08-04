import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavorite(){
    try{
    const response = yield axios.get('/api/favorite/');
    yield put({type: "SET_FAVORITE", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing favorite', err);
    }
}

function* favoriteSaga(){
    yield takeEvery('GET_FAVORITE_DATA', fetchFavorite); 
}

export default favoriteSaga;