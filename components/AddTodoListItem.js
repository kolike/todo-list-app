import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubmitButton = styled.button`
  background-color: rgba(10, 20, 250, 0.7);
  color: white;
  border-radius: 3px;
  &:hover {
    -webkit-text-shadow: 1px 1px 1px #fff;
    -moz-text-shadow: 1px 1px 1px #fff;
    text-shadow: 1px 1px 1px #fff;
  }
`;

const AddTodoListItem = ({ onAdd }) => {
  const [content, setContent] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      content,
      isImportant,
    };
    onAdd(newTodo);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label for="content">Describe your Todo</label>
      <input
        id="content"
        required
        type="text"
        placeholder="add something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Row>
        <input
          id="isImportant"
          type="checkbox"
          value={isImportant}
          onChange={() => setIsImportant((isImportant) => !isImportant)}
        />
        <label for="isImportant">Important todo?</label>
      </Row>
      <SubmitButton type="submit">Create Todo</SubmitButton>
    </Form>
  );
};

export default AddTodoListItem;
