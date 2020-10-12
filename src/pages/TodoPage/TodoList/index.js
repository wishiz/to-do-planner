import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import AddTodoForm from '../AddTodoForm';
import Todo from '../Todo';

const useStyles = makeStyles((theme) => ({
  dividerInset: {
    height: '2px',
  },
}));

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue || /^\s*$/.test(newValue)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item)),
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const toggleCompleteTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const classes = useStyles();

  return (
    <div>
      <AddTodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        toggleCompleteTodo={toggleCompleteTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
