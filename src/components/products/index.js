import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from './action';

class Products extends Component {
 
  componentWillMount(){
    console.log("fetchp");
    this.props.fetchProducts();
  }
  
  render() {
    const {products} =this.props
    console.log("the result",products)
    return (
      <div>
        {products.products.map((item)=>(
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    )
  }
}
const mapStateProps = (state)=>({
  products:state.products
})
export default connect(mapStateProps,{fetchProducts})(Products)

