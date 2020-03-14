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
  ]
}
const reducer = (state=initState,action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        todos: [...state.todos, action.addit]
      }
      case 'DEL_TODO':
        let newTodo = state.todos.filter(item => item.id!==action.id)
        return {
          todos: newTodo
        }
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
