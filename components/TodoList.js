import TodoListItem from './TodoListItem';

const TodoList = ({ data, onDelete, ontoggle }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        ontoggle={() => ontoggle(id)}
      />
    );
  });
  return <ul>{elements}</ul>;
};

export default TodoList;
