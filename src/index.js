import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = {
  todos: [
    {id: 1, content: 'Read Redux'},
    {id: 2, content: 'Do assignment'}
  ],
  isLoggedIn:false
}
const reducer = (state=initState,action) => {
  switch(action.type){
    case 'LOGOUT':
      return {...state,
      isLoggedIn: !state.isLoggedIn
    }
      case 'LOGIN':
        if(action.payload.username==='aaa' && action.payload.password==='aaa'){
        console.log("success");
        return { ...state,
          isLoggedIn:true
        }
       }else{
        console.log("failure");
        return { ...state,
          isLoggedIn:false
        }
       }
      case 'ADD_TODO':
        return {
          todos: [...state.todos, action.addit],
          isLoggedIn: state.isLoggedIn
        }
        case 'DEL_TODO':
        let newTodo = state.todos.filter(item => item.id!==action.id)
        return {
          todos: newTodo,
          isLoggedIn: state.isLoggedIn

        }
        case 'UPDATE_TODO':
       // console.log('updated',typeof(action.updateTodo.id));
        let con = Number(action.updateTodo.id);
        // let newUpdateTodo= state.todos.find(item => item.id===con);
        // newUpdateTodo.content = action.updateTodo.content;
        // console.log(newUpdateTodo)
        return {todos:state.todos.map(
          todo =>
          todo.id === con
              ? {
                  ...todo,
                  content: action.updateTodo.content
                }
              : todo
        ),
        isLoggedIn: state.isLoggedIn

              }//return
        default: return state;
  }
}


const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
