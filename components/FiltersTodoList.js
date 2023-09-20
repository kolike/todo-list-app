import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

const FiltersTodoList = ({ activeTab, setActiveTab }) => {
  return (
    <Row>
      <select
        onChange={(e) => setActiveTab({ ...activeTab, completed: e.target.value })}
        name="Completeness"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>
      <label htmlFor="Completeness">Completeness?</label>
      <select
        onChange={(e) => setActiveTab({ ...activeTab, important: e.target.value })}
        name="Importance"
      >
        <option value="all">All</option>
        <option value="important">Important</option>
        <option value="notImportant">Not Important</option>
      </select>
      <label htmlFor="Importance">Importance?</label>
    </Row>
  );
};

export default FiltersTodoList;
