import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import productsList from './components/products'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/products" component={productsList} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
