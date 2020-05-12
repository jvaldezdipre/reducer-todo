import React from 'react';

const TodoForm = () => {
  const handleChanges = e => {
    //update state with each keystroke
    // this.setState({
    //   keyword: e.target.value,
    // });
  };

  const submitForm = e => {
    e.preventDefault();

    // //calls the addTodo methos and the the written words to the name
    // this.props.addTodo(this.state.keyword);

    // //resets the keyword back to empty
    // this.setState({
    //   keyword: '',
    // });
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type='text'
        name='todo'
        value={state.keyword}
        onChange={handleChanges}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
