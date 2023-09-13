import { useState } from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {
  const { id, content, isImportant, isDone, onDelete, ontoggle } = props;

  return (
    <>
      <div className="todo-item">
        {isImportant ? '(!!!)' : null}
        <div onClick={() => ontoggle(id)} className={isDone ? 'is-done' : 'in-progress'}>
          {content}
        </div>
        <button onClick={() => onDelete(id)}>Remove</button>
      </div>
    </>
  );
};

export default TodoListItem;
