import { Box, Typography, Checkbox, Button, Paper, Stack } from '@mui/material';

import type { Todo } from '../models/Todo';

type TodoItemProps = {
  todoItem: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export const TodoItem = ({ todoItem, onDelete, onToggle }: TodoItemProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        // mt: 2,
        backgroundColor: todoItem.isCompleted ? '#e0e0e0' : '#ffffff',
        opacity: todoItem.isCompleted ? 0.6 : 1,
        transition: 'all 0.3s',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 0 }}
      >
        <Box
          onClick={() => onToggle(todoItem.id)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
          }}
        >
          <Checkbox checked={todoItem.isCompleted} />
          <Typography
            variant="body1"
            sx={{
              textDecoration: todoItem.isCompleted ? 'line-through' : 'none',
            }}
          >
            {todoItem.description}
          </Typography>
        </Box>
        <Button
          onClick={() => onDelete(todoItem.id)}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </Stack>
    </Paper>
  );
};
