import { Box, Typography } from '@mui/material';

import { Todo } from '../models/Todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todoList: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export const TodoList = ({ todoList, onDelete, onToggle }: TodoListProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 4,
      }}
    >
      {todoList.length === 0 ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 3,
          }}
        >
          You have nothing to do! Would you like to add something?
        </Typography>
      ) : (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todoItem={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </Box>
  );
};
