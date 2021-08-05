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

function* updateProduct(action){
    try{
    yield axios.put(`/api/items/item/${action.payload}`);
    yield put({type: 'GET_PRODUCT_DATA'});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* deleteProduct(action){
    try{
    yield axios.delete(`/api/items/delete/${action.payload}`);
    yield put({type: 'GET_PRODUCT_DATA'});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* productSaga(){
    yield takeEvery('GET_PRODUCT_DATA', fetchProduct);
    yield takeEvery("DELETE_FROM_LIST", deleteProduct);
    yield takeEvery("UPDATE_AVAILABLE", updateProduct);

}

export default productSaga;