import React, { useState, useReducer } from 'react';
import './App.css';

import { todoReducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [name, setName] = useState('');

  //--------------HANDLERS-------------------
  const changeHandler = e => {
    setName(e.target.value);
  };

  return (
    <div className='App'>
      <h2>Welcome to your Todo App!</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({
            type: 'ADD_TODO',
            payload: name,
          });
          console.log(state.todos);
        }}
      >
        <input type='text' name='todo' value={name} onChange={changeHandler} />
        <button>Add</button>
      </form>
      <button
        onClick={() => {
          dispatch({ type: 'DELETE_COMPLETED' });
        }}
      >
        Delete Completed
      </button>
      {state.todos.map(todo => (
        <div className={`todo-item${todo.completed ? ' completed' : ''}`}>
          <p
            onClick={() => {
              dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
              console.log('clicked');
            }}
          >
            {todo.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
