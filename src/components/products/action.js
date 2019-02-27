import {FETCH_PRODUCTS} from './constants'

export const fetchProducts = ()=>{
   return{
       type:FETCH_PRODUCTS,
   }
}