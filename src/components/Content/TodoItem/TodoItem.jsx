import styles from './TodoItem.module.scss';

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className={styles.todo}>
      <input type="button" value="" className={styles.todo__check} />
      <input
        type="button"
        value=""
        className={styles.todo__trash}
        onClick={() => deleteTodo(todo.id)}
      />
      <div className={styles.todo__info}>
        <div className={styles.todo__text}>{todo.text}</div>
        <div className={styles.todo__bottom}>
          <div className={styles.todo__date}>{todo.date}</div>
          <div className={styles.todo__category}>{todo.category}</div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
