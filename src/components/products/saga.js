import {put,call,takeLatest} from 'redux-saga/effects'
import {FETCH_PRODUCTS,PRODUCTS_SUCCESS,PRODUCTS_FAILURE} from './constants';
import {handleApiError} from '../../components/lib/api-errorHandle';
function fetchProductsApiCall(){
   fetch("https://jsonplaceholder.typicode.com/posts").then(handleApiError)
   .then(response=> response.json())
   .then(json=>json)
   .catch(error=>error)
}
function* fetchProductsFlow(){
    try{
        const response=yield call(fetchProductsApiCall)
        yield put({type:PRODUCTS_SUCCESS,response})
    }catch(error){
        yield put ({type:PRODUCTS_FAILURE,error})
    }
   
}

function* fetchProductsWatcher(){
    yield takeLatest(FETCH_PRODUCTS,fetchProductsFlow)
}

export default fetchProductsWatcher