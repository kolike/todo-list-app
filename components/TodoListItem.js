import styled from 'styled-components';
import classNames from 'classnames';
import './TodoListItem.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid #3d5a80;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    -webkit-text-shadow: 1px 1px 1px #000;
    -moz-text-shadow: 1px 1px 1px #000;
    text-shadow: 1px 1px 1px #000;
  }
`;

const RemoveButton = styled.button`
  background-color: rgba(250, 20, 10, 0.7);
  color: white;
  border-radius: 3px;
  &:hover {
    -webkit-text-shadow: 1px 1px 1px #fff;
    -moz-text-shadow: 1px 1px 1px #fff;
    text-shadow: 1px 1px 1px #fff;
  }
`;

const TodoListItem = (props) => {
  const { content, isImportant, isDone, onDelete, onToggle } = props;
  const isDoneClassName = classNames({ isImportant: isImportant }, { isDone: isDone });

  return (
    <Container>
      <Row className={isDoneClassName}>
        <input type="checkbox" onChange={onToggle} />
        {content}
        {isImportant ? '(!!!)' : null}
      </Row>
      <RemoveButton onClick={onDelete}>Remove</RemoveButton>
    </Container>
  );
};

export default TodoListItem;
