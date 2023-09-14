import './TodoListItem.css';

const TodoListItem = (props) => {
  const { id, content, isImportant, isDone, onDelete, onToggle } = props;
  return (
    <>
      <div className="todo-item">
        {isImportant ? <input type="checkbox" checked disabled /> : null}

        <div onClick={() => onToggle()} className={isDone ? 'is-done' : 'in-progress'}>
          {content}
        </div>
        <button onClick={() => onDelete(id)}>Remove</button>
      </div>
    </>
  );
};

export default TodoListItem;
