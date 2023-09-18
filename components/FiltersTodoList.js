import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

const FilterButtonCompleted = styled.button`
  background-color: ${(props) =>
    props.$activeTab === 'completed' ? 'rgba(20, 220, 10, 0.7)' : 'white'};
  color: ${(props) => (props.$activeTab === 'completed' ? 'white' : 'rgba(20, 220, 10, 0.7)')};
  border-radius: 3px;
  border-color: rgba(20, 220, 10, 0.7);
  &:hover {
    background-color: rgba(20, 220, 10, 0.7);
    color: white;
    border-color: black;
  }
`;

const FilterButtonImportant = styled.button`
  background-color: ${(props) =>
    props.$activeTab === 'important' ? 'rgba(250, 20, 10, 0.7)' : 'white'};
  color: ${(props) => (props.$activeTab === 'important' ? 'white' : 'rgba(250, 20, 10, 0.7)')};
  border-radius: 3px;
  border-color: rgba(250, 20, 10, 0.7);
  &:hover {
    background-color: rgba(250, 20, 10, 0.7);
    color: white;
    border-color: black;
  }
`;

const FilterButtonAll = styled.button`
  background-color: ${(props) => (props.$activeTab === 'all' ? 'rgba(20, 20, 250, 0.9)' : 'white')};
  color: ${(props) => (props.$activeTab === 'all' ? 'white' : 'rgba(20, 20, 250, 0.9)')};
  border-radius: 3px;
  border-color: rgba(20, 20, 250, 0.9);
  &:hover {
    background-color: rgba(20, 20, 250, 0.9);
    color: white;
    border-color: black;
  }
`;

const FiltersTodoList = ({ activeTab, setActiveTab }) => {
  return (
    <Row>
      <FilterButtonCompleted onClick={() => setActiveTab('completed')} $activeTab={activeTab}>
        Completed
      </FilterButtonCompleted>
      <FilterButtonImportant onClick={() => setActiveTab('important')} $activeTab={activeTab}>
        Important
      </FilterButtonImportant>
      <FilterButtonAll onClick={() => setActiveTab('all')} $activeTab={activeTab}>
        All
      </FilterButtonAll>
    </Row>
  );
};

export default FiltersTodoList;
