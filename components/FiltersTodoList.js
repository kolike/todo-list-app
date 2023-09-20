import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const FiltersTodoList = ({ filtersState, setFiltersState }) => {
  return (
    <Row>
      <Col>
        <label htmlFor="Completeness">Completeness</label>
        <select
          onChange={(e) => setFiltersState({ ...filtersState, completed: e.target.value })}
          name="Completeness"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </Col>
      <Col>
        <label htmlFor="Importance">Importance</label>
        <select
          onChange={(e) => setFiltersState({ ...filtersState, important: e.target.value })}
          name="Importance"
        >
          <option value="all">All</option>
          <option value="important">Important</option>
          <option value="notImportant">Not Important</option>
        </select>
      </Col>
    </Row>
  );
};

export default FiltersTodoList;
