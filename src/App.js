import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import { connect } from 'react-redux';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Read html'},
      {id: 2, content: 'Do assignment'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });Math.random().toString(36).substr(2, 9);
    this.setState({
      todos
    });
  }

  render() {
    console.log('faiza====',this.props.todos)
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">My Todo List</h1>
        <Todos />
        <AddTodo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);