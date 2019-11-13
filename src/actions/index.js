export const markComplete = (markId) => ({
   type: 'MARK_COMPLETE',
   markId
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
});

export const addTodo = (title) => ({
  type: 'ADD_TODO',
  title
});