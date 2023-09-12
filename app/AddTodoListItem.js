'use client';

import { useState } from 'react';

function AddTodoListItem() {
  const [inputValue, setInputValue] = useState('');
  const [importantValue, setImportantValue] = useState(false);

  const createNewTask = () => {
    const newTask = {
      content: inputValue,
      important: importantValue,
    };
    return newTask;
  };

  return (
    <>
      <div>
        <input
          required
          name="name"
          type="text"
          placeholder="add something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            console.log('newTask: ', createNewTask());
          }}
        >
          Create Task
        </button>
        <div>
          important task?
          <input
            type="checkbox"
            value={inputValue}
            onChange={() => setImportantValue(!importantValue)}
          />
        </div>
      </div>
    </>
  );
}

export default AddTodoListItem;
