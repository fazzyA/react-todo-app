import React from 'react';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux'
export const browserHistory = createBrowserHistory();

  class Todos extends React.Component {
state = {
  content:'',
  id:''
}
    handleChange = (e) => {
    //   const inputId='E'+e.target.id;
    //  const text=document.getElementById(inputId).innerHTML;
    //   console.log(text)
      this.setState({
        id: e.target.id,
        content: e.target.value
      });
      console.log("handleChange",this.state)

      }
      changeValue = (e) => {
        const inputId='E'+e.target.id;
        const text=document.getElementById(inputId).innerHTML;
      //   console.log(text)
        document.getElementById(e.target.id).value=text
      }
      clear = (e) => {
        document.getElementById(e.target.id).value='';
      }
      

    render(){
    const todoList = this.props.todos.length ? (
      this.props.todos.map(todo => {
        const myid = 'E'+todo.id;
          return (
            <div className="collection-item" key={todo.id}>
              <div id={myid}>{todo.content}</div>
              <input onChange={this.handleChange} onBlur={this.clear} onFocus={this.changeValue} id={todo.id} placeholder="enter updated value here"></input>
              <button onClick={()=>{this.props.update(this.state)}}>Edit</button>
              <button onClick={() => {this.props.delete(todo.id)}}>Delete</button>
            </div>
          )
        })
      ) : (
        <p className="center">You have no todo's left, yay!</p>
      );
    
      return (
        <div className="todos collection">
          {/* <form onSubmit={this.handleSubmit}> */}
          {todoList}
          {/* </form> */}
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
        update: (updateTodo) => {dispatch({type:'UPDATE_TODO', updateTodo:updateTodo})},
      }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Todos);