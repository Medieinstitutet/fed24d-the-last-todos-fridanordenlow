// import type { Todo } from '../models/Todo';
// import { Button } from '@mui/material';

// // Vad är jag beredd på att ta emot?
// type TodoItemProps = {
//   todoItem: Todo;
//   onDelete: (id: number) => void;
//   onToggle: (id: number) => void;
// };

// // props: TodoItemProps
// export const TodoItem = ({ todoItem, onDelete, onToggle }: TodoItemProps) => {
//   return (
//     <div className="todo-item">
//       <p>{todoItem.description}</p>
//       <input
//         type="checkbox"
//         checked={todoItem.isCompleted}
//         onChange={() => onToggle(todoItem.id)}
//       />
//       {/* <button onClick={() => onDelete(todoItem.id)}>Delete</button> */}
//       <Button
//         onClick={() => onDelete(todoItem.id)}
//         variant="contained"
//         color="primary"
//       >
//         Klicka mig!
//       </Button>
//     </div>
//   );
// };

import type { Todo } from '../models/Todo';
import { Box, Typography, Checkbox, Button, Paper, Stack } from '@mui/material';

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
          variant="outlined"
          color="secondary"
        >
          Delete
        </Button>
      </Stack>
    </Paper>
  );
};
