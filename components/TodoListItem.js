import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
    &:hover {
      border-radius: 10px;
    background-color:rgba(300, 200, 100 ,0.5) }} 
  }
`;

const Row = styled.div`
  text-decoration: ${(props) => (props.$isDone ? 'line-through' : 'none')};
  color: ${(props) => (props.$isImportant ? 'red' : 'black')};
  display: flex;
  flex-direction: row;
`;

const RemoveButton = styled.button`
  background-color: white;
  color: rgba(250, 20, 10, 0.7);
  border-radius: 3px;
  border-color: rgba(250, 20, 10, 0.7);
  &:hover {
    background-color: rgba(250, 20, 10, 0.7);
    color: white;
    border-color: black;
  }
`;

const TodoListItem = (props) => {
  const { content, isImportant, isDone, onDelete, onToggle } = props;

  return (
    <Container>
      <Row $isDone={isDone} $isImportant={isImportant}>
        <input type="checkbox" onChange={onToggle} />
        {content}
        {isImportant ? '(!!!)' : null}
      </Row>
      <RemoveButton onClick={onDelete}>Remove</RemoveButton>
    </Container>
  );
};

export default TodoListItem;
