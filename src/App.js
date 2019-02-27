import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import productsList from './components/products'
import addForm from './components/products/addForm';
import editForm from './components/products/editForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/products" component={productsList} />
              <Route exact path="/products/add" component={addForm}/>
              <Route exact path="/products/edit" component={editForm}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
