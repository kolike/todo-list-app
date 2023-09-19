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
    all: false,
    completed: false,
    important: false,
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
        all: false,
        completed: true,
        important: false,
      }):
        return data.filter((item) => item.isDone);
      case JSON.stringify({
        all: false,
        completed: false,
        important: true,
      }):
        return data.filter((item) => item.isImportant);
      case JSON.stringify({
        all: true,
        completed: false,
        important: false,
      }):
        return data;
      case JSON.stringify({
        all: false,
        completed: false,
        important: false,
      }):
        return data.filter((item) => !item.isImportant && !item.isDone);
      case JSON.stringify({
        all: false,
        completed: true,
        important: true,
      }):
        return data.filter((item) => item.isImportant && item.isDone);
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
