'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useState, useEffect } from 'react';
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

  const getData = async () => {
    const responce = await fetch('/api/todos/');
    const data = await responce.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const postTodo = async (newTodo) => {
    const response = await fetch('/api/todos/add', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setData(data);
  };

  const removeTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    setData(data);
  };

  const updateTodo = async (item, id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setData(data);
  };

  const toggleTodo = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        updateTodo({ ...item, isDone: !item.isDone }, id);
      }
      return item;
    });
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
        <AddTodoListItem onAdd={postTodo} />
        <TodoList
          data={getFilteredData(filtersState)}
          onDelete={removeTodo}
          onToggle={toggleTodo}
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />
      </Content>
    </Container>
  );
};

export default Page;
