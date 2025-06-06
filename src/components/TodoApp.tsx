import { useState } from 'react';

import { Box } from '@mui/material';

import { Todo } from '../models/Todo';

import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';
import { SortTodos } from './SortTodos';

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorage';
import Header from './Header';

export const TodoApp = () => {
  // const saveToLocalStorage = (todos: Todo[]) => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // };

  // const loadFromLocalStorage = (): Todo[] => {
  //   const storedItems = localStorage.getItem('todos');
  //   return storedItems
  //     ? JSON.parse(storedItems)
  //     : [
  //         new Todo('Clean the balcony'),
  //         new Todo('Plant the flowers'),
  //         new Todo('Re-pot the cuttings'),
  //       ];
  // };

  const [todos, setTodos] = useState<Todo[]>(
    () =>
      loadFromLocalStorage<Todo[]>('todos') ?? [
        new Todo('Clean the balcony'),
        new Todo('Plant the flowers'),
        new Todo('Re-pot the cuttings'),
      ]
  );

  const addTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    saveToLocalStorage('todos', updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage('todos', updatedTodos);
  };

  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
    saveToLocalStorage('todos', updatedTodos);
  };

  const sortTodos = (sorted: Todo[]) => {
    setTodos(sorted);
  };

  console.log('Todos', todos);

  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          mx: 'auto',
          mt: 1,
        }}
      >
        <Header />
        <AddTodo addTodo={addTodo} />
        <SortTodos todoList={todos} onSort={sortTodos} />
        <TodoList
          todoList={todos}
          onDelete={deleteTodo}
          onToggle={toggleCompleted}
        />
      </Box>
    </>
  );
};
