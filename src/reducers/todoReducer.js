export const todo = ( state = [], action ) => {
  switch(action.type) {
    case 'MARK_COMPLETE':
      return state.map((todo) => {
          if(todo.id === action.id) {
              todo.completed = !todo.completed
          }
         return todo;
      });
    case 'DELETE_TODO':
      return [...state.filter((todo) => todo.id !== action.id)];
    case 'ADD_TODO':
      let newTodo = {
        id: state.length + 1,
        title: action.type,
        completed: false
      }
      return [...state, newTodo];
    default:
      return state;
  }
}