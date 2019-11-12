export const markComplete = (id) => ({
   type: 'MARK_COMPLETE',
   id
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
});

export const addTodo = (title) => ({
  type: 'ADD_TODO',
  title
});