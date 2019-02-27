import productSaga from '../components/products/saga'
import {all} from 'redux-saga/effects'

export default function* indexSaga(){
    yield all ([
        productSaga(),
    ])
}