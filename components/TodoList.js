import TodoListItem from './TodoListItem';
import './todoList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({ data, onDelete, onToggle }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggle={() => onToggle(id)}
      />
    );
  });
  return (
    <div className="todo-list">
      <ul> {elements} </ul>
    </div>
  );
};

export default TodoList;
