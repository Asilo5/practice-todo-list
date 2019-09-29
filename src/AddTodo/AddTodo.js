import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''})
  }

  onChange = (e) => this.setState({ [e.target.name] : e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          className='add-todo-input' 
          type='text' 
          name='title' 
          placeholder='Add Todo Here' 
          value={this.state.title}
          onChange={this.onChange}
        /> 
        <input 
          className='submit-btn'
          type='submit' 
          value='Submit' 
        />
      </form>
    )
  }
}

export default AddTodo;