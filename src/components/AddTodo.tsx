import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todo';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  //   const [description, setDescription] = useState('');

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setDescription(e.target.value);
  //   };

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();

  //     const newTodo = new Todo(description);
  //     addTodo(newTodo);
  //     setDescription('');
  //   };

  // Ger felmeddelandet:
  // hook.js:608 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
  const [todo, setTodo] = useState<Todo>(new Todo(''));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(todo);
    setTodo(new Todo(''));
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4, maxWidth: 500, margin: '0 auto' }}>
      <Typography variant="h6" gutterBottom>
        Add new todo
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', gap: 2, alignItems: 'center' }}
      >
        <TextField
          label="Description"
          type="text"
          id="description"
          value={todo.description || ''}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        ></TextField>
        <Button type="submit" variant="outlined">
          Add
        </Button>
      </Box>
    </Paper>
  );
};
