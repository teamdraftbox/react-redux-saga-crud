import {combineReducers} from 'redux';
import products from '../components/products/reducer';

const indexReducer =combineReducers({
    products,
})

export default indexReducer