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

// todos reducer
export const todosRedux = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      const newTodo = {id: action.id, name: action.name, isComplete: false}
      return [...state, newTodo ]
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {...todo, isComplete: !todo.isComplete}
        } else {
          return todo
        }
      })
    default:
      return state;
  }
}
