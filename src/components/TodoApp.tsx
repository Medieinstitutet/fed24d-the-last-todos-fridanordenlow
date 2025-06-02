import { useState } from 'react';
import { Todo } from '../models/Todo';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Clean the balcony'),
    new Todo('Plant the flowers'),
    new Todo('Re-pot the cuttings'),
  ]);

  return (
    <>
      <h1>The Last Todos To Do</h1>
      <TodoList todoList={todos} />
    </>
  );
};
