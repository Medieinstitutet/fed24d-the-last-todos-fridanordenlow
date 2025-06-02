import type { Todo } from '../models/Todo';

type TodoItemProps = {
  todoItem: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export const TodoItem = ({ todoItem, onDelete, onToggle }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <p>{todoItem.description}</p>
      <input
        type="checkbox"
        checked={todoItem.isDone}
        onChange={() => onToggle(todoItem.id)}
      />
      <button onClick={() => onDelete(todoItem.id)}>Delete</button>
    </div>
  );
};
