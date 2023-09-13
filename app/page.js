'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useEffect, useState } from 'react';

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

  const deleteToto = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const toggleIsDone = (id) => {
    setData(
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
      <AddTodoListItem data={data} setData={setData} />
      <TodoList data={data} onDelete={deleteToto} ontoggle={toggleIsDone} />
    </>
  );
};

export default Page;
