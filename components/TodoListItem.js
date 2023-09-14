import './TodoListItem.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoListItem = (props) => {
  const { content, isImportant, isDone, onDelete, onToggle } = props;

  const isDoneChangeClass = () => {
    return isDone ? 'is-done' : 'in-progress';
  };
  const isImportantChangeClass = () => {
    return isImportant ? 'is-important' : '';
  };

  return (
    <>
      <div className="todo-item">
        <div className={isDoneChangeClass()}>
          <div className={isImportantChangeClass()}>
            <input type="checkbox" onChange={onToggle} />
            {content}
            {isImportant ? '(!!!)' : null}
            <Button onClick={onDelete} variant="outline-danger" className="button-remove">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
