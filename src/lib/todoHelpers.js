export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (startTodo, updatedTodo) => {
  return startTodo.map(item => {
    if (item.id === updatedTodo.id) {
      return updatedTodo;
    }
    return item
  })
}

export const removeTodo = (startTodo, removeId) => {
  return startTodo.filter(item => {
    return item.id !== removeId
  })
}

export const filterTodos = (list, route) => {
  switch(route) {
    case '/active':
      return list.filter(item => !item.isComplete)
    case '/complete':
      return list.filter(item => item.isComplete)
    default:
      return list
  }
}

// Redux functions
// reducer composition: different reducers specify how different parts of the
// state tree are updated in response to actions

// reducer for individual todo items
const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {id: action.id, name: action.name, isComplete: false};
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return {...state, isComplete: !state.isComplete};
      } else {
        return state;
      }
    default:
      return state;
  }
}

// todos reducer
export const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [ ...state, todo(undefined, action) ]
    case 'TOGGLE_TODO':
      return state.map((todoItem) => todo(todoItem, action));
    default:
      return state;
  }
}

// visibilityFilter reducer
const visibilityFilter = (state='SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// currentTodo reducer
const currentTodo = (state='', action) => {
  switch(action.type) {
    case 'CHANGE_CURRENT_TODO':
      return action.name;
    default:
      return state;
  }
}

// Reducer composition with objects
// top-level reducer
const todoApp = (state = {}, action) => {
  return {
    todos: todos( state.todos, action),
    visibilityFilter: visibilityFilter( state.visibilityFilter, action),
    currentTodo: currentTodo(state.currentTodo, action)
  }
}
