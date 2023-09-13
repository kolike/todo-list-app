import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const AddTodoListItem = (props) => {
  const [content, setContent] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { setData } = props;

    const newTodo = {
      id: uuidv4(),
      content,
      isImportant,
    };
    setData((data) => [...data, newTodo]);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            required
            name="name"
            type="text"
            placeholder="add something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Create Task</button>
          <div>
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
