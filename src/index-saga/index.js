import productSaga from '../components/products/saga'
export default function* indexSaga(){
    yield[
        productSaga(),
    ]
}