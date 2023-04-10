import { useState } from 'react';

import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';

const Content = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodoHandler = (idx) => {
    setTodos(todos.filter((todo) => todo.id != idx));
  };

  return (
    <div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default Content;
