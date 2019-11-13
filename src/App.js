import React, { Component } from 'react';
import './App.css';
import Todos from './Todos/Todos';
import Header from './Layout/Header';
import AddTodo from './AddTodo/AddTodo';
import { connect } from 'react-redux';
import { markComplete, deleteTodo } from './actions';
import { bindActionCreators } from 'redux';

class App extends Component{

  toggleCheck = (id) => {
    const { markComplete } = this.props;
    markComplete(id);
  }

  deleteBtn = (id) => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }


  render() {
    return (
      <section className='App'>
        <section className='container'>
          <Header />
          <AddTodo />
          <Todos 
          toggleCheck={this.toggleCheck}
          deleteBtn={this.deleteBtn}
          />
        </section>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    markComplete,
    deleteTodo
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
