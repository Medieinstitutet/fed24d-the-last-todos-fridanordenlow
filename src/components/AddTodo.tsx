import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todo';

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
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
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add new todo</h2>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          value={todo.description}
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
};
