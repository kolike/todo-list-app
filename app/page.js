'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page = () => {
  const initialData = [
    {
      id: 1,
      content: 'walk the dog',
      isImportant: true,
      isDone: false,
    },
    {
      id: 2,
      content: 'buy coffee',
      isImportant: false,
      isDone: false,
    },
    {
      id: 3,
      content: 'fuck Meredith',
      isImportant: false,
      isDone: false,
    },
  ];
  const [data, setData] = useState(initialData);

  const deleteTodo = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const addTodo = (newTodo) => {
    setData((data) => [...data, newTodo]);
  };

  const onToggle = (id) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    );
  };

  return (
    <>
      <h1 style={{ marginLeft: 40 + 'px' }}>Todo List App!</h1>
      <AddTodoListItem onAdd={addTodo} />
      <TodoList data={data} onDelete={deleteTodo} onToggle={onToggle} />
    </>
  );
};

export default Page;
