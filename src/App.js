import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import { connect } from 'react-redux';
import Form from './Form';

class App extends Component {

  render() {
    console.log('my app',this.props.isLoggedIn)
    if(this.props.isLoggedIn){
      return (
        <div className="todo-app container">
          <h1 className="center blue-text">My Todo List</h1>
          <div><button onClick={this.props.logout}>logout</button></div>
          <Todos />
          <AddTodo />
        </div>
      );
  
    }//if 
    else{
      return (
        <Form />
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isLoggedIn: state.isLoggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {dispatch({type:'LOGOUT'})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);