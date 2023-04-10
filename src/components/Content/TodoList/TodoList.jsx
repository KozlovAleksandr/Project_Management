import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
