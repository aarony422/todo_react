import React from 'react';
import { Footer } from './components/router'
import { AddTodo, VisibleTodoList } from './components/todo'

export const App = () => {
  return (
    <div>
      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  );
}

export default App;
