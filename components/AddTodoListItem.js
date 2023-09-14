import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './addTodoListItem.css';
const AddTodoListItem = ({ onAdd }) => {
  const [content, setContent] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content,
      isImportant,
    };
    onAdd(newTodo);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="todo-add">
        <div className="todo-add-item">
          <input
            required
            name="name"
            type="text"
            placeholder="add something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button type="submit" variant="success">
            Create Task
          </Button>
          <div className="todo-add-item">
            important task?
            <input
              type="checkbox"
              value={isImportant}
              onChange={() => setIsImportant((isImportant) => !isImportant)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTodoListItem;
