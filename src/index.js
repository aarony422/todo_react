import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { todoApp } from './lib/todoStore';

class Provider extends React.Component {
  // make store available to all children (and grand children) components using
  // Context feature. The store was passed in via props in our ReactDOM render call
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children;
  }
}

// Define the context types that children will receive
// Types must match with those returned in getChildContext
Provider.childContextTypes = {
  store: React.PropTypes.object
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
