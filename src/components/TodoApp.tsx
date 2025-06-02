import { useState } from 'react';
import { Todo } from '../models/Todo';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Clean the balcony'),
    new Todo('Plant the flowers'),
    new Todo('Re-pot the cuttings'),
  ]);

  // Listor i state
  // Lägg till -> spread [...todos]
  // Ta bort -> filter todos.filter()
  // Ändra object i listan -> map todos.map

  console.log('Todos', todos);
  // const addTodo = (todo: Todo) => {
  //   setTodos([...todos, todo]);
  // };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleIsTodoDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };
  return (
    <>
      <h1>The Last Todos To Do</h1>
      <TodoList
        todoList={todos}
        onDelete={deleteTodo}
        onToggle={toggleIsTodoDone}
      />
    </>
  );
};
