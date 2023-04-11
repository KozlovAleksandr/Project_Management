import { useState } from 'react';

import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';

interface Todo {
  text: string;
  id: string;
  date: Date;
  category: string;
}

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo: Todo) => {
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

export default Todo;
