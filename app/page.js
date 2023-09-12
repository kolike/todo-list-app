import TodoList from './TodoList';
import AddTodoListItem from './AddTodoListItem';

export default function Page() {
  return (
    <>
      <h1>Todo List App!</h1>
      <AddTodoListItem />
      <TodoList />
    </>
  );
}
