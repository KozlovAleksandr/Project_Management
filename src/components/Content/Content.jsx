import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { BiCheckSquare } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import styles from './Content.module.scss';

const Content = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (todo !== '') {
      addTodoHandler({
        text: todo,
        id: uuidv4(),
        date: new Date().toLocaleDateString(),
        category: 'hobby',
      });
      setTodo('');
    }
  };

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodoHandler = (idx) => {
    setTodos(todos.filter((todo) => todo.id != idx));
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitFormHandler}>
        <div className={styles.form__inpit}>
          <input type="submit" value="" />
          <input
            type="text"
            placeholder="enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
      </form>
      {todos.map((todo) => (
        <div className={styles.todo} key={todo.id}>
          <input type="button" value="" className={styles.todo__check} />
          <input
            type="button"
            value=""
            className={styles.todo__trash}
            onClick={() => deleteTodoHandler(todo.id)}
          />
          {/* <button onClick={() => deleteTodoHandler(todo.id)}></button> */}
          <div className={styles.todo__info}>
            <div className={styles.todo__text}>{todo.text}</div>
            <div className={styles.todo__bottom}>
              <div className={styles.todo__date}>{todo.date}</div>
              <div className={styles.todo__category}>{todo.category}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
