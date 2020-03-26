import React, { Component } from 'react'
import { connect } from 'react-redux'


class AddTodo extends Component {
  state = {
    content:''
  }
  handleChange = (e) => {
//  console.log("+++++++++++++++",this.props.todos)
//  //const newTodo = {
//   id:Math.random()*10+1,
//   content: e.target.value

//  }
 //// new variable in state and use it to store new todo and then update
    this.setState({
      id: Math.floor(Math.random()*50.+1),
      content: e.target.value
    });

  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(".HANDLE..",this.state)
    // call function to add a todo
    this.props.add(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input autoFocus type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
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
    add: (todo) => {dispatch({type:'ADD_TODO', addit:todo})}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
