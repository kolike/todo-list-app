'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useState } from 'react';

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

  const onAdd = (newTodo) => {
    setData((data) => [...data, newTodo]);
  };

  const toggleIsDone = (id) => {
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
      <h1>Todo List App!</h1>
      <AddTodoListItem onAdd={onAdd} />
      <TodoList data={data} onDelete={deleteTodo} onToggle={toggleIsDone} />
    </>
  );
};

export default Page;
