import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { todoApp } from './lib/todoStore';

const store = createStore(todoApp)

const render = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}

store.subscribe(render)
render();
