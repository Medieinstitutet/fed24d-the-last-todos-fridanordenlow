import type { Todo } from '../models/Todo';

type TodoItemProps = {
  todoItem: Todo;
};

export const TodoItem = ({ todoItem }: TodoItemProps) => {
  return (
    <>
      <p>{todoItem.description}</p>
      <input type="checkbox" checked={todoItem.isDone} />
    </>
  );
};
