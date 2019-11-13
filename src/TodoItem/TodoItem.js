import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { markComplete, deleteTodo } from '../actions';
import { bindActionCreators } from 'redux';

export class TodoItem extends Component {
  
    getStyle = () => {
      const { todo } = this.props;
      return { 
           textDecoration: todo.completed ? 'line-through' : 'none',
           background: '#f1c40f',
           padding: '10px',
           borderBottom: '1px black dotted'
      }
    }

    // toggleCheck = (id) => {
    //   const { markComplete, deleteTodo } = this.props;
    //   console.log(id);
    //   console.log(markComplete);
    // }

    render() {
        const { title, id} = this.props.todo;
        const { markComplete, deleteTodo } = this.props;
        return (
            <div style={this.getStyle()}>
              <p>
                <input className='checkbox' type='checkbox' onChange={() => this.props.toggleCheck(id)} />
                { title }
                <button className='delete-btn' onClick={() => this.props.deleteBtn(id)}>X</button>
              </p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    markComplete,
    deleteTodo
  }, dispatch)
)

export default connect(null, mapDispatchToProps)(TodoItem);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
