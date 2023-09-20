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
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState({
    completed: 'all',
    important: 'all',
  });

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

  const getFilteredData = (activeTab) => {
    switch (JSON.stringify(activeTab)) {
      case JSON.stringify({
        completed: 'completed',
        important: 'all',
      }):
        return data.filter((item) => item.isDone);

      case JSON.stringify({
        completed: 'notCompleted',
        important: 'all',
      }):
        return data.filter((item) => !item.isDone);

      case JSON.stringify({
        completed: 'all',
        important: 'important',
      }):
        return data.filter((item) => item.isImportant);

      case JSON.stringify({
        completed: 'all',
        important: 'notImportant',
      }):
        return data.filter((item) => !item.isImportant);

      case JSON.stringify({
        completed: 'all',
        important: 'all',
      }):
        return data;

      case JSON.stringify({
        completed: 'notCompleted',
        important: 'important',
      }):
        return data.filter((item) => item.isImportant && !item.isDone);

      case JSON.stringify({
        completed: 'completed',
        important: 'notImportant',
      }):
        return data.filter((item) => !item.isImportant && item.isDone);

      case JSON.stringify({
        completed: 'completed',
        important: 'important',
      }):
        return data.filter((item) => item.isImportant && item.isDone);

      case JSON.stringify({
        completed: 'notCompleted',
        important: 'notImportant',
      }):
        return data.filter((item) => !item.isImportant && !item.isDone);

      default:
        throw new Error('No such filter exists');
    }
  };

  return (
    <Container>
      <h1>Todo List App!</h1>
      <Content>
        <AddTodoListItem onAdd={addTodo} />
        <TodoList
          data={getFilteredData(activeTab)}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Content>
    </Container>
  );
};

export default Page;
