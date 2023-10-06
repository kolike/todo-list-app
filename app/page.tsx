'use client';
import TodoList from '../components/TodoList';
import AddTodoListItem from '../components/AddTodoListItem';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import React from 'react';

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

export type Item = { id:string,
      content:string,
      isImportant:boolean,
      isDone: boolean,
    };

  export  type FilterState = {
      completeness:string,
      importance:string
    }

const Page = () => {
  const [data, setData] = useState([]);
  const [filtersState, setFiltersState] = useState({
    completeness: 'all',
    importance: 'all',
  });

    

  const getData = async () => {
    const response = await fetch('/api/todos/');
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const addTodo = async (newTodo :Item) => {
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

  const deleteTodo = async (id:string) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    setData(data);
  };

  const updateTodo = async (item:Item, id:string) => {
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

  const toggleTodo = (id:string) => {
    const elem = data.find((item:Item) => item.id === id);
 //   @ts-ignore
    updateTodo({ ...elem, isDone: !elem.isDone }, id);
  };

  const getFilteredData = (filtersState: FilterState) => {
    let result: Item[] = [];

    if (filtersState.completeness === 'completed') {
      result = data.filter((item:Item) => item.isDone);
    } else if (filtersState.completeness === 'notCompleted') {
      result = data.filter((item:Item) => !item.isDone);
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
