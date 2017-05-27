import React from 'react';
import { Footer } from './components/router'
import { AddTodo, VisibleTodoList } from './components/todo'

export const App = ({
  store
}) => {
  return (
    <div>
      <AddTodo
        store={store}/>
      <VisibleTodoList
        store={store}/>
      <Footer
        store={store}/>
    </div>
  );
}

export default App;
