import './TodoListItem.css';

const TodoListItem = (props) => {
  const { content, isImportant, isDone, onDelete, onToggle } = props;
  return (
    <>
      <div className="todo-item">
        <div className={isDone ? 'is-done' : 'in-progress'}>
          <input type="checkbox" onChange={onToggle} />
          {content}
          {isImportant ? '(!!!)' : null}
        </div>
        <button onClick={onDelete}>Remove</button>
      </div>
    </>
  );
};

export default TodoListItem;
