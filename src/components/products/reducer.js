import {FETCH_PRODUCTS,PUT_PRODUCTS,POST_PRODUCTS,DELETE_PRODUCTS,PRODUCTS_FAILURE,PRODUCTS_SUCCESS} from './constants';
const initialState = {
    success:false,
    requesting:false,
    error:[],
    products:[],
}

const productReducer = (state=initialState,action)=>{
      switch (action.type) {
          case FETCH_PRODUCTS:
            return {
                products:[],
                success:false,
                requesting:true,
                error:[],
            }
            case PRODUCTS_SUCCESS:
            return{
                success:true,
                requesting:false,
                error:[],
                products:action.response
            }
            case PRODUCTS_FAILURE:
            return{
                success:false,
                requesting:false,
                error:[{error:action.error}],
                products:[]
            }
          default:
              return state
      }
}

export default productReducer