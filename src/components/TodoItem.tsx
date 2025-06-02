import type { Todo } from '../models/Todo';

// Vad är jag beredd på att ta emot?
type TodoItemProps = {
  todoItem: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

// props: TodoItemProps
export const TodoItem = ({ todoItem, onDelete, onToggle }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <p>{todoItem.description}</p>
      <input
        type="checkbox"
        checked={todoItem.isCompleted}
        onChange={() => onToggle(todoItem.id)}
      />
      <button onClick={() => onDelete(todoItem.id)}>Delete</button>
    </div>
  );
};
