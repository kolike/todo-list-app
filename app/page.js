'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import FilterTodoList from '@/components/FilterTodoList';
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
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('');

  const deleteTodo = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
  };

  const addTodo = (newTodo) => {
    setData((data) => [...data, newTodo]);
  };

  const toggleTodo = (id) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    );
  };

  let filtredData = [...data];
  switch (activeTab) {
    case '1':
      filtredData = filtredData.filter((item) => !item.isDone);
      break;
    case '2':
      filtredData = filtredData.filter((item) => item.isDone);
      break;
    case '3':
      filtredData = filtredData.filter((item) => item.isImportant);
      break;
    case '0':
      filtredData;
      break;
    default:
      break;
  }

  return (
    <Container>
      <h1>Todo List App!</h1>
      <Content>
        <AddTodoListItem onAdd={addTodo} />
        {data.length === 0 ? <h3>Todo list is empty</h3> : null}
        <FilterTodoList activeTab={activeTab} setActiveTab={setActiveTab} />
        <TodoList data={filtredData} onDelete={deleteTodo} onToggle={toggleTodo} />
      </Content>
    </Container>
  );
};

export default Page;
