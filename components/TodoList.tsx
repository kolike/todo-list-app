import TodoListItem from './TodoListItem';
import FiltersTodoList from './FiltersTodoList';
import styled from 'styled-components';
import React from 'react';
import type { Item, FiltersState } from '../app/page';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

type Props = {
  data: Item[];
  onDelete: (id: string) => Promise<void>;
  onToggle: (id: string) => void;
  filtersState: FiltersState;
  setFiltersState: React.Dispatch<
    React.SetStateAction<{
      completeness: string;
      importance: string;
    }>
  >;
};

const TodoList = ({ data, onDelete, onToggle, filtersState, setFiltersState }: Props) => {
  const elements = data.map((item: Item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        id={id}
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
