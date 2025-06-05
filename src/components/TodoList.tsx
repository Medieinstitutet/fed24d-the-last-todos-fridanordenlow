// import { Todo } from '../models/Todo';
// import { TodoItem } from './TodoItem';

// type TodoListProps = {
//   todoList: Todo[];
//   onDelete: (id: number) => void;
//   onToggle: (id: number) => void;
// };

// export const TodoList = ({ todoList, onDelete, onToggle }: TodoListProps) => {
//   return (
//     <>
//       {todoList.map((todo) => (
//         <TodoItem
//           key={todo.id}
//           todoItem={todo}
//           onDelete={onDelete}
//           onToggle={onToggle}
//         />
//       ))}
//     </>
//   );
// };

import { Todo } from '../models/Todo';
import { TodoItem } from './TodoItem';
import { Box, Typography } from '@mui/material';

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
        gap: 2,
        // p: 3,
        mt: 4,
        mb: 4,
        // maxWidth: 500,
        // margin: '0 auto',
      }}
    >
      {todoList.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
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
