'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useState, useEffect, useCallback } from 'react';
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
  const url = 'http://localhost:3000/api/todos/';

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const responce = await fetch(url);
      const json = await responce.json();
      setData(json);
    } catch {
      throw new Error('Error getting file ');
    }
  };

  const postTodo = async (data) => {
    try {
      const response = await fetch(url + 'add', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Successful file upload:', json);
    } catch {
      throw new Error('Error sending file ');
    }
  };

  const removeTodo = async (id) => {
    try {
      const response = await fetch(`${url + id}`, {
        method: 'DELETE',
      });
      const json = await response.json();
      console.log('Successful file delete:', json);
    } catch {
      throw new Error('Error deleting file');
    }
  };

  const updateTodo = async (item, id) => {
    try {
      const response = await fetch(`${url + id}`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Successful file toggle:', JSON.stringify(json));
    } catch {
      throw new Error('Error toggling file');
    }
  };

  const deleteTodo = (id) => {
    setData((data) => data.filter((item) => item.id !== id));
    removeTodo(id);
  };

  const addTodo = (newTodo) => {
    setData((data) => [...data, newTodo]);
    postTodo(newTodo);
  };

  const toggleTodo = (id) => {
    setData((data) =>
      data.map((item) => {
        if (item.id === id) {
          updateTodo({ ...item, isDone: !item.isDone }, id);
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
