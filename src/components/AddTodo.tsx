import { useState, type ChangeEvent, type FormEvent } from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { Todo } from '../models/Todo';

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo(''));
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (todo.description.trim() === '') {
      setError('Please write a description');
      // alert('Please write a description of your todo');
      return;
    }

    addTodo(todo);
    setTodo(new Todo(''));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        mb: 4,
        maxWidth: 500,
        margin: '0 auto',
      }}
    >
      <Typography variant="h6" sx={{ color: '#414e62' }} gutterBottom>
        Add something new to do
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}
      >
        <TextField
          label="Description"
          type="text"
          id="description"
          value={todo.description || ''}
          onChange={handleChange}
          variant="outlined"
          size="small"
          fullWidth
          error={!!error}
          helperText={error}
        ></TextField>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
    </Paper>
  );
};
