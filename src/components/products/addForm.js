import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createProducts,deleteProducts} from './action';
 class  addForm extends Component {
  state={
      title:null,
      body:null
  }
  handleRequest = (evt)=>{
  this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit = (e)=>{
    e.preventDefault()
      const {title,body} = this.state
      const{createProducts} = this.props
      const data = {
          title,
          body
      }
      createProducts(data)  
  }
  handleDelete = ()=>{
    this.props.deleteProducts(1)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Enter title</label>
                <input type="text" name="title" onChange={this.handleRequest}/>
            </div>
            <div>
                <label>Enter Body</label>
                <input type="text" name="body" onChange={this.handleRequest}/>
            </div>
            <input type="submit" value="submit"/>
            <input type="button" value="delete" onClick={this.handleDelete}/>
        </form>
      </div>
    )
  }
}

export default connect(null,{createProducts,deleteProducts})(addForm)