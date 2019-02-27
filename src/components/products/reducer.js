import {FETCH_PRODUCTS,CREATE_PRODUCTS,PRODUCTS_FAILURE,PRODUCTS_SUCCESS, DELETE_PRODUCTS} from './constants';
const initialState = {
    success:false,
    requesting:false,
    error:[],
    products:[],
}

const productReducer = (state=initialState,action)=>{
      switch (action.type) {
          case FETCH_PRODUCTS:
          console.log("fetch reducer called")
            return {
                products:[],
                success:false,
                requesting:true,
                error:[],
            }
            case PRODUCTS_SUCCESS:
            console.log("fetch success reducer called",action.response)
            return{
                success:true,
                requesting:false,
                error:[],
                products:action.response
            }
            case PRODUCTS_FAILURE:
            console.log("fetch  failure reducer called")
            return{
                success:false,
                requesting:false,
                error:[{error:action.error}],
                products:[]
            }
            case CREATE_PRODUCTS:
            console.log("add reducercalled")
            return{
                success:true,
                requesting:false,
                error:[],
            }
            case DELETE_PRODUCTS:
            console.log("deleting products")
            return {
                success:false,
                requesting:false,
                error:[{error:action.error}],
                products:action.response
            }
          default:
              return state
      }
}

export default productReducer