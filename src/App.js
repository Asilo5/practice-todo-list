import React, { Component } from 'react';
import './App.css';
import Todos from './Todos/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Dinner with J-Dawg',
        completed: false
      },
      {
        id: 2,
        title: 'Make gnocchi',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
       if (todo.id === id) {
         todo.completed = !todo.completed;
       }
       return todo;
      }) 
    })
  }

  render() {
    return (
      <section className='App'>
         <h1>Todo List</h1>
         <Todos 
           todos={this.state.todos} 
           markComplete={this.markComplete} 
         />
      </section>
    )
  }
}

export default App;
