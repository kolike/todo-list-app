import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const RemoveButton = styled.button`
  background-color: rgba(250, 20, 10, 0.7);
  color: white;
  border-radius: 3px;
`;

const TodoListItem = (props) => {
  const { content, isImportant, isDone, onDelete, onToggle } = props;

  return (
    <Container>
      <Row>
        <input type="checkbox" onChange={onToggle} />
        {content}
        {isImportant ? '(!!!)' : null}
      </Row>
      <RemoveButton onClick={onDelete}>Remove</RemoveButton>
    </Container>
  );
};

export default TodoListItem;
