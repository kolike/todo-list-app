'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
    <Container>
      <h1>Todo List App!</h1>
      <Content>
        <AddTodoListItem onAdd={addTodo} />
        <TodoList data={data} onDelete={deleteTodo} onToggle={onToggle} />
      </Content>
    </Container>
  );
};

export default Page;
