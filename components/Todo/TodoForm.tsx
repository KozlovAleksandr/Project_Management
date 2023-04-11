import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './TodoForm.module.scss';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (todo !== '') {
      addTodo({
        text: todo,
        id: uuidv4(),
        date: new Date().toLocaleDateString(),
        category: 'hobby',
      });
      setTodo('');
    }
  };
  return (
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
  );
};

export default TodoForm;
