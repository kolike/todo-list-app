import TodoListItem from './TodoListItem';
import FiltersTodoList from './FiltersTodoList';
import styled from 'styled-components';
import { useEffect } from 'react';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

const TodoList = ({ data, onDelete, onToggle, filtersState, setFiltersState }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggle={() => onToggle(id)}
      />
    );
  });

  return (
    <>
      <FiltersTodoList filtersState={filtersState} setFiltersState={setFiltersState} />
      {data.length > 0 ? <List>{elements}</List> : <h3>Todo list is empty</h3>}
    </>
  );
};

export default TodoList;
