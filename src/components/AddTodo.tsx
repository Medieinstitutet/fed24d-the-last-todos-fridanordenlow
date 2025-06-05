import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Todo } from '../models/Todo';

type AddTodoProps = {
  addTodo: (todo: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  //   const [description, setDescription] = useState('');

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setDescription(e.target.value);
  //   };

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();

  //     const newTodo = new Todo(description);
  //     addTodo(newTodo);
  //     setDescription('');
  //   };

  // Ger felmeddelandet:
  // hook.js:608 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
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
          // value={description}
          value={todo.description}
          onChange={handleChange}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
};
