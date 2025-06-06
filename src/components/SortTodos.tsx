import { useState } from 'react';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from '@mui/material';

import type { Todo } from '../models/Todo';

type SortTodosProps = {
  todoList: Todo[];
  onSort: (sorted: Todo[]) => void;
};

export const SortTodos = ({ todoList, onSort }: SortTodosProps) => {
  const [sorting, setSorting] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    setSorting(value);

    const sortedTodos = [...todoList];

    switch (value) {
      case 'alphabetical-a-z':
        sortedTodos.sort((a, b) => a.description.localeCompare(b.description));
        break;

      case 'alphabetical-z-a':
        sortedTodos.sort((a, b) => b.description.localeCompare(a.description));
        break;

      case 'done':
        sortedTodos.sort(
          (a, b) => Number(b.isCompleted) - Number(a.isCompleted)
        );
        break;

      case 'not-done':
        sortedTodos.sort(
          (a, b) => Number(a.isCompleted) - Number(b.isCompleted)
        );
        break;

      case 'newest':
        sortedTodos.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;

      case 'oldest':
        sortedTodos.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
    }

    onSort(sortedTodos);
  };

  return (
    <Box sx={{ minWidth: 120, mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="sorting-label">Sort by</InputLabel>
        <Select
          labelId="sorting-label"
          id="demo-simple-select"
          value={sorting}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value="alphabetical-a-z">A–Z</MenuItem>
          <MenuItem value="alphabetical-z-a">Z–A</MenuItem>
          <MenuItem value="done">Done</MenuItem>
          <MenuItem value="not-done">Not done</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
