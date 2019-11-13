import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { bindActionCreators } from 'redux';

export class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '' 
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.title);
    this.setState({ title: ''});
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

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addTodo
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(AddTodo);