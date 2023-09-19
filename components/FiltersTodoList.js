import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

const FilterButtonCompleted = styled.button`
  background-color: ${(props) => (props.$isActive ? 'rgba(20, 220, 10, 0.7)' : 'white')};
  color: ${(props) => (props.$isActive ? 'white' : 'rgba(20, 100, 10, 0.9)')};
  border-radius: 3px;
  border-color: rgba(20, 220, 10, 0.7);
  &:hover {
    border-color: black;
    border-width: 2px;
  }
  &:active {
    background-color: rgba(20, 150, 10, 0.7);
    color: white;
    border-color: black;
  }
`;

const FilterButtonImportant = styled.button`
  background-color: ${(props) => (props.$isActive ? 'rgba(250, 20, 10, 0.7)' : 'white')};
  color: ${(props) => (props.$isActive ? 'white' : 'rgba(250, 20, 10, 0.7)')};
  border-radius: 3px;
  border-color: rgba(250, 20, 10, 0.7);
  &:hover {
    border-color: black;
  }
  &:active {
    background-color: rgba(200, 20, 10, 0.7);
    color: white;
    border-color: black;
  }
`;

const FilterButtonAll = styled.button`
  background-color: ${(props) => (props.$isActive ? 'rgba(20, 20, 250, 0.9)' : 'white')};
  color: ${(props) => (props.$isActive ? 'white' : 'rgba(20, 20, 250, 0.9)')};
  border-radius: 3px;
  border-color: rgba(20, 20, 250, 0.9);
  &:hover {
    border-color: black;
  }
  &:active {
    background-color: rgba(20, 20, 200, 0.9);
    color: white;
    border-color: black;
  }
`;

const FiltersTodoList = ({ activeTab, setActiveTab }) => {
  return (
    <Row>
      <FilterButtonAll
        onClick={() =>
          setActiveTab((activeTab) => ({
            all: !activeTab.all,
            completed: false,
            important: false,
          }))
        }
        $isActive={activeTab.all}
      >
        All
      </FilterButtonAll>
      <FilterButtonCompleted
        onClick={() =>
          setActiveTab((activeTab) => ({
            ...activeTab,
            all: false,
            completed: !activeTab.completed,
          }))
        }
        $isActive={activeTab.completed}
      >
        Completed
      </FilterButtonCompleted>
      <FilterButtonImportant
        onClick={() =>
          setActiveTab((activeTab) => ({
            ...activeTab,
            all: false,
            important: !activeTab.important,
          }))
        }
        $isActive={activeTab.important}
      >
        Important
      </FilterButtonImportant>
    </Row>
  );
};

export default FiltersTodoList;
