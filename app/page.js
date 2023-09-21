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
  const [filtersState, setFiltersState] = useState({
    completeness: 'all',
    importance: 'all',
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

  const getFilteredData = (filtersState) => {
    let result = [];

    if (filtersState.completeness === 'completed') {
      result = data.filter((item) => item.isDone);
    } else if (filtersState.completeness === 'notCompleted') {
      result = data.filter((item) => !item.isDone);
    } else if (filtersState.completeness === 'all') {
      result = data;
    }

    if (filtersState.importance === 'important') {
      result = result.filter((item) => item.isImportant);
    } else if (filtersState.importance === 'notImportant') {
      result = result.filter((item) => !item.isImportant);
    } else if (filtersState.importance === 'all') {
      result = result;
    }

    return result;
  };

  return (
    <Container>
      <h1>Todo List App!</h1>
      <Content>
        <AddTodoListItem onAdd={addTodo} />
        <TodoList
          data={getFilteredData(filtersState)}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />
      </Content>
    </Container>
  );
};

export default Page;
