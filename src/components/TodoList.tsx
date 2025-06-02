import { Todo } from '../models/Todo';
import { TodoItem } from './TodoItem';

type TodoListProps = {
  todoList: Todo[];
};

export const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </>
  );
};
