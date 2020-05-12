export const initialState = {
  todos: [
    {
      name: 'skiing',
      id: Date.now(),
      completed: false,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        name: action.payload,
        id: Date.now(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case 'DELETE_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
  }
};
