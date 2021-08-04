import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchProduct(){
    try{
    const response = yield axios.get('/api/items/itemlist');
    yield put({type: "SET_PRODUCTS", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* productSaga(){
    yield takeEvery('GET_PRODUCT_DATA', fetchProduct); 
}

export default productSaga;