import React from 'react';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux'
export const browserHistory = createBrowserHistory();

  class Todos extends React.Component {
    render(){
    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span>{todo.content}</span>
              <button onClick={() => {this.props.delete(todo.id)}}>Delete</button>
            </div>
          )
        })
      ) : (
        <p className="center">You have no todo's left, yay!</p>
      );
    
      return (
        <div className="todos collection">
          {todoList}
        </div>
      )
    }
  }
    const mapStateToProps = (state) => {
      return {
        todos: state.todos
      }
    }
    const mapDispatchToProps = (dispatch) => {
      return {
        delete: (id) => {dispatch({type:'DEL_TODO', id:id})},
      }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Todos);