import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

const FilterButtonActive = styled.button`
  background-color: ${(props) => (props.$activeTab === '1' ? 'rgba(249, 105, 14, 0.7)' : 'white')};
  color: ${(props) => (props.$activeTab === '1' ? 'white' : 'rgba(249, 105, 14, 1)')};
  border-radius: 3px;
  border-color: rgba(249, 105, 14, 0.7);
  &:hover {
    background-color: rgba(249, 105, 14, 0.7);
    color: white;
    border-color: black;
  }
`;
const FilterButtonCompleted = styled.button`
  background-color: ${(props) => (props.$activeTab === '2' ? 'rgba(20, 250, 10, 0.7)' : 'white')};
  color: rgba(20, 150, 20, 0.9);
  border-radius: 3px;
  border-color: rgba(20, 250, 10, 0.7);
  &:hover {
    background-color: rgba(20, 250, 10, 0.7);
    color: white;
    border-color: black;
  }
`;
const FilterButtonImportant = styled.button`
  background-color: ${(props) => (props.$activeTab === '3' ? 'rgba(250, 20, 10, 0.7)' : 'white')};
  color: ${(props) => (props.$activeTab === '3' ? 'white' : 'rgba(250, 20, 10, 0.7)')};
  border-radius: 3px;
  border-color: rgba(250, 20, 10, 0.7);
  &:hover {
    background-color: rgba(250, 20, 10, 0.7);
    color: white;
    border-color: black;
  }
`;
const FilterButtonAll = styled.button`
  background-color: ${(props) => (props.$activeTab === '0' ? 'rgba(20, 20, 250, 0.9)' : 'white')};
  color: ${(props) => (props.$activeTab === '0' ? 'white' : 'rgba(20, 20, 250, 0.9)')};
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
      <FilterButtonActive onClick={() => setActiveTab('1')} $activeTab={activeTab}>
        Active
      </FilterButtonActive>
      <FilterButtonCompleted onClick={() => setActiveTab('2')} $activeTab={activeTab}>
        Completed
      </FilterButtonCompleted>
      <FilterButtonImportant onClick={() => setActiveTab('3')} $activeTab={activeTab}>
        Important
      </FilterButtonImportant>
      <FilterButtonAll onClick={() => setActiveTab('0')} $activeTab={activeTab}>
        All
      </FilterButtonAll>
    </Row>
  );
};
export default FiltersTodoList;
