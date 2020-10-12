import React, { useState } from 'react';

import {
  makeStyles,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@material-ui/core/';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

import AddTodoForm from '../AddTodoForm';

const useStyles = makeStyles((theme) => ({
  todo: {},
  todoComplete: {
    textDecoration: 'line-through',
    color: theme.palette.secondary.main,
  },
  icons: {
    display: 'inline-block',
  },
  removeIconComplete: {
    color: theme.palette.secondary.main,
  },
}));

function Todo({ todos, toggleCompleteTodo, updateTodo, removeTodo }) {
  const classes = useStyles();

  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <AddTodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? classes.todoComplete : classes.todo}
      key={index}
    >
      <FormControlLabel
        control={
          <Checkbox
            key={todo.id}
            onChange={() => toggleCompleteTodo(todo.id)}
            checked={todo.isComplete}
            name={`todo_id#${todo.id}`}
          />
        }
        label={todo.text}
      />
      <div className={classes.icons}>
        {todo.isComplete ? null : (
          <IconButton
            onClick={() => {
              updateTodo({ id: todo.id, value: todo.text });
            }}
          >
            <EditIcon />
          </IconButton>
        )}

        <IconButton
          onClick={() => removeTodo(todo.id)}
          className={
            todo.isComplete ? classes.removeIconComplete : classes.removeIcon
          }
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  ));
}

export default Todo;
