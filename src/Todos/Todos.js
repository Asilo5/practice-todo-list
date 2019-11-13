import React from 'react';
import { TodoItem }from '../TodoItem/TodoItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Todos = ({ todos, toggleCheck, deleteBtn }) => { 
    return todos.map((todo) => (
      <TodoItem  
        key={todo.id} 
        todo={todo} 
        toggleCheck={toggleCheck}
        deleteBtn={deleteBtn}
      />
    ));
}

export const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(mapStateToProps)(Todos);


Todos.propTypes = {
  todos: PropTypes.array.isRequired
}