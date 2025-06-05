import { useState } from 'react';
import { Todo } from '../models/Todo';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {
  const saveToLocalStorage = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const loadFromLocalStorage = (): Todo[] => {
    const storedItems = localStorage.getItem('todos');
    return storedItems
      ? JSON.parse(storedItems)
      : [
          new Todo('Clean the balcony'),
          new Todo('Plant the flowers'),
          new Todo('Re-pot the cuttings'),
        ];
  };

  const [todos, setTodos] = useState<Todo[]>(() => loadFromLocalStorage());

  const addTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((t) => t.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const toggleCompleted = (id: number) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  console.log('Todos', todos);

  return (
    <>
      <h1>The Last Todos To Do</h1>
      <TodoList
        todoList={todos}
        onDelete={deleteTodo}
        onToggle={toggleCompleted}
      />
      <AddTodo addTodo={addTodo} />
    </>
  );
};
