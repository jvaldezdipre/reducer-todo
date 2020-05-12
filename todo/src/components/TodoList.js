import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.filteredTodos.map(todo => {
        return (
          <Todo key={todo.id} todo={todo} completeTodo={props.completeTodo} />
        );
      })}
    </div>
  );
};

export default TodoList;
