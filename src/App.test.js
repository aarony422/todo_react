import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { todoApp } from './lib/todoStore'


it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(todoApp);
  ReactDOM.render(<App
    store={store}/>, div);
});
