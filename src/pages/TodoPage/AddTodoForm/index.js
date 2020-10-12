import React, { useState } from 'react';

import { makeStyles, Input, Button } from '@material-ui/core';
import { nanoid } from 'nanoid';

const useStyles = makeStyles((theme) => ({
  todoSaveButton: {
    maxHeight: '40px',
    minHeight: '40px',
  },
  todoInput: {
    marginRight: 24,
    height: 40,
  },
}));

export default function AddTodoForm({ onSubmit }) {
  const classes = useStyles();

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: nanoid(),
      text: input,
      isComplete: false,
    });

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Input
        color="secondary"
        type="text"
        placeholder="Add to-do"
        value={input}
        name="text"
        onChange={handleChange}
        className={classes.todoInput}
        id="standard-uncontrolled"
      />
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        type="submit"
        className={classes.todoSaveButton}
      >
        Do it
      </Button>
    </form>
  );
}
