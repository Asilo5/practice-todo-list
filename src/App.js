import React, { Component } from 'react';
import './App.css';
import Todos from './Todos/Todos';
import Header from './Layout/Header';
import AddTodo from './AddTodo/AddTodo';

class App extends Component {
  state = {
    todos: []
  }

   // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
       if (todo.id === id) {
         todo.completed = !todo.completed;
       }
       return todo;
      }) 
    })
  }

  // Delete Todo button
  deleteButton = (id) => {
   // if the id matches the ones in the array
   // only return the ids that do not match
    this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)]})
  }

  // Add new Todo
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <section className='App'>
        <section className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
            deleteButton={this.deleteButton}
          />
        </section>
      </section>
    )
  }
}

export default App;
