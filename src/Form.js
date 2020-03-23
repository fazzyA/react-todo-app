import React, {Component} from "react";
import {connect} from "react-redux";

class Form extends Component{
 state={
    username:"",
    password:"",
 }

changeHandler = (ev) => {
    this.setState({
        [ev.target.id]:ev.target.value
    })
}

handleSubmit=(e)=>{
    e.preventDefault();
    this.props.changeSubmit(this.state)
    console.log(this.props)
}

render(){
    return(
            <div className="formdiv">
                <form onSubmit={this.handleSubmit}>
                <label className="userlabel">Username</label>
                <br />
                <input type="text" value={this.state.username} onChange={this.changeHandler} id="username" />
                <br />
                <br />
                <label className="pswd">Password</label>
                <br />
                <input type="password" value={this.state.password} onChange={this.changeHandler} id="password" />
                <br />
                <br />
                <button>Sumbit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
       username:state.username,
       password:state.password,
       logged:state.isLoggedIn
    }
  }
const mapDispatchToProps =(dispatch)=>{
    return{
      changeSubmit:(name)=>{dispatch({type:"LOGIN", payload:name})},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);




