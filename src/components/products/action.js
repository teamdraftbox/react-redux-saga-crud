import {FETCH_PRODUCTS,CREATE_PRODUCTS,DELETE_PRODUCTS} from './constants'

export const fetchProducts = (action)=>{
    console.log("calling action")
   return{
       type:FETCH_PRODUCTS,
       action
   }
}

export const createProducts=(action)=>{
    console.log("action called")
    return{
        type:CREATE_PRODUCTS,
        action,
    }
}
export const deleteProducts = (action)=>{
    return {
        type:DELETE_PRODUCTS,
        action
    }
}