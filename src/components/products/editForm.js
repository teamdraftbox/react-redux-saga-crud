import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchProducts} from './action';

 class editForm extends Component {
    constructor(props){
       super(props)
       this.titleInput =React.createRef();
       this.bodyInput = React.createRef()
    }
   componentWillMount(){
       const {fetchProducts} = this.props
       fetchProducts()
   }
  render() {
    const {products} =this.props
      if(products.success){
        const item = products.products[0]
        console.log(products.products)
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <label>Enter title</label>
                      <input
                          type="text"
                          name="title"
                          ref={this.titleInput}
                          defaultValue={item.title}
                        />
                  </div>
                  <div>
                      <label>Enter Body</label>
                      <input
                          type="text"
                          name="body"
                          ref={this.bodyInput}
                          defaultValue={item.body}
                        />
                  </div>
                  <input type="submit" value="submit"/>
                  <input type="button" value="delete" onClick={this.handleDelete}/>
              </form>
            </div>
          )
      }else{
          return <p>yet loading</p>
      }
    
  }
}
const mapStateToProps=(state)=>({
    products:state.products
})
export default connect(mapStateToProps,{fetchProducts})(editForm)