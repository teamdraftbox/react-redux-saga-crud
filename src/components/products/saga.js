import {put,takeLatest,all} from 'redux-saga/effects'
import {FETCH_PRODUCTS,PRODUCTS_SUCCESS,PRODUCTS_FAILURE, CREATE_PRODUCTS,DELETE_PRODUCTS} from './constants';
import {handleApiError} from '../../components/lib/api-errorHandle';

function* fetchProductsFlow(){
    try{
        
        const  response= yield fetch("https://jsonplaceholder.typicode.com/posts")
        .then(handleApiError)
        .then(response=> response.json())
        .then(json=>{
            console.log("jsonis",json)
            return json
        })
        .catch(error=>error)
        yield put({type:PRODUCTS_SUCCESS,response})
    }catch(error){
        yield put ({type:PRODUCTS_FAILURE,error})
    }
   
}
function* createProduct(action){
    try{
        console.log("attack the fetch")
        const  response = yield fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body:JSON.stringify(action)
        }).then(response=>response.json())
        .then((json)=>{
            return json
        })
        .catch((error)=>error)
        yield put({type:PRODUCTS_SUCCESS,response})
    }catch(error){
        console.log(error)
        yield put ({type:PRODUCTS_FAILURE,error})
    }
 }
 function* deleteProducts (action){
   try{
    console.log("attack the fetch")
    const  response = yield fetch(`https://jsonplaceholder.typicode.com/posts/${action}`,{
        method:"DELETE",
    }).then(response=>response.json())
    .then((json)=>{
        return json
    })
    .catch((error)=>error)
    yield put({type:PRODUCTS_SUCCESS,response,action})
   }catch(error){
    yield put ({type:PRODUCTS_FAILURE,error})
   }
 }
function* fetchProductsWatcher(){
    console.log("at saga watcher")

    yield all([
        takeLatest(FETCH_PRODUCTS,fetchProductsFlow),
        takeLatest(CREATE_PRODUCTS, createProduct),
        takeLatest(DELETE_PRODUCTS,deleteProducts)

      ])
}


export default fetchProductsWatcher;