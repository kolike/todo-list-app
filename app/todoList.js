import TodoListItem from './TodoListItem';
import TodoListItemAdd from './TodoListItemAdd';
function TodoList() {
  return (
    <div>
      <TodoListItemAdd />
      <ul>
        <li>
          <TodoListItem />
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
