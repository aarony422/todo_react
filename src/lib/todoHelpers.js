export const generateId = () => Math.floor(Math.random()*100000)

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.isComplete)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.isComplete)
    default:
      return todos
  }
}
