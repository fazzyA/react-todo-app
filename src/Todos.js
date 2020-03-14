import React from 'react';
import { connect } from 'react-redux'


// const Todos = ({todos, deleteTodo}) => {
  class Todos extends React.Component {
    render(){
  //console.log(this.props)
    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
          return (
            <div className="collection-item" key={todo.id}>
              <span onClick={() => {this.props.delete(todo.id)}}>{todo.content}</span>
              {/* <span>{todo.content}</span> */}
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
        delete: (id) => {dispatch({type:'DEL_TODO', id:id})}
      }

    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Todos);