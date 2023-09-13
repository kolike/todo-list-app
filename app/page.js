import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';

export default function Page() {
  return (
    <>
      <h1>Todo List App!</h1>
      <AddTodoListItem />
      <TodoList />
    </>
  );
}
