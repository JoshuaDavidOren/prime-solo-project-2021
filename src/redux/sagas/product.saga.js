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

function* fetchFarmerProduct(action){
    try{
    const id = Number(action.payload.id)
    const response = yield axios.get(`/api/items/item/${id}`);
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

function* addProductList(action){
        try{
            yield axios.post( '/api/items/addproduct', action.payload);
            yield put({type: 'GET_PRODUCT_DATA'});
        } 
        catch(error) {
            console.log('Error POSTing to database', error);
        }
}

function* getAllProducts(){
    try{
    const response = yield axios.get('/api/items/listproducts');
    yield put({type: "SET_ALL_PRODUCTS", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing profile', err);
    }
}

function* addProductToProducts(action){
    try{
        yield axios.post( '/api/items/product', action.payload);
        yield put({type: 'GET_PRODUCT_DATA'});
    } 
    catch(error) {
        console.log('Error POSTing to database', error);
    }
}

function* productSaga(){
    yield takeEvery('GET_PRODUCT_DATA', fetchProduct);
    yield takeEvery("DELETE_FROM_LIST", deleteProduct);
    yield takeEvery("UPDATE_AVAILABLE", updateProduct);
    yield takeEvery("ADD_ITEM_FARMER_LIST", addProductList);
    yield takeEvery("GET_ALL_PRODUCTS", getAllProducts);
    yield takeEvery("ADD_NEW_PRODUCT", addProductToProducts);
    yield takeEvery('GET_PRODUCT_DATA_FARMER',fetchFarmerProduct);
}

export default productSaga;