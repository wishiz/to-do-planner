import React, { useState } from 'react';

import {
  makeStyles,
  Container,
  Typography,
  Dialog,
  DialogTitle,
} from '@material-ui/core';

import TodoList from './TodoList';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  title: {
    marginBottom: '32px',
  },
  editDialog: {
    backdropFilter: 'blur(2px)',
  },
}));

function TodoPage() {
  const classes = useStyles();

  const [isModalOpen, toggleModal] = useState(true);

  const handleClose = () => {
    toggleModal(!isModalOpen);
  };

  return (
    <>
      <Container maxWidth="md" style={{ height: '100vh', paddingTop: '48px' }}>
        <Typography variant="h1" color="primary" className={classes.title}>
          My tasks
        </Typography>
        <TodoList />
      </Container>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        className={classes.editDialog}
        overlayStyle={{ backgroundColor: '#fff' }}
      >
        <DialogTitle id="edit-todo">Edit to-do</DialogTitle>
      </Dialog>
    </>
  );
}

export default TodoPage;
