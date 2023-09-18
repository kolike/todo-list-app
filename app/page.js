'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import FiltersTodoList from '@/components/FiltersTodoList';
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
  const [activeTab, setActiveTab] = useState('all');
  const [dataItemCounter, setDataItemCounter] = useState(0);

  const deleteTodo = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
    setDataItemCounter((dataItemCounter) => dataItemCounter - 1);
  };

  const addTodo = (newTodo) => {
    setData((data) => [...data, newTodo]);
    setDataItemCounter((dataItemCounter) => dataItemCounter + 1);
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
    switch (activeTab) {
      case 'unfinished':
        return data.filter((item) => !item.isDone);
      case 'completed':
        return data.filter((item) => item.isDone);
      case 'important':
        return data.filter((item) => item.isImportant);
      case 'all':
        return data;
      default:
        alert('no such filter exists');
        break;
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
          dataItemCounter={dataItemCounter}
        />
      </Content>
    </Container>
  );
};

export default Page;
