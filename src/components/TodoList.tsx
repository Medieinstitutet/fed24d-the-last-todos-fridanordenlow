import { Todo } from '../models/Todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todoList: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export const TodoList = ({ todoList, onDelete, onToggle }: TodoListProps) => {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
