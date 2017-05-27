import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { todoApp } from './lib/todoStore';

ReactDOM.render(
  <App store={createStore(todoApp)}/>,
  document.getElementById('root')
);
