import TodoListItem from './TodoListItem';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

const TodoList = ({ data, onDelete, onToggle }) => {
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

  return <List>{elements}</List>;
};

export default TodoList;
