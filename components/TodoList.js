import TodoListItem from './TodoListItem';

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
  return <ul>{elements}</ul>;
};

export default TodoList;
