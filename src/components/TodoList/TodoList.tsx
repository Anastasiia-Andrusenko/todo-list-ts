
import { Todo } from "../Todo/Todo";
import css from './TodoList.module.css';
import { TodoState } from '../../redux/types';


export const TodoList: React.FC<TodoState> = ({ todos, message }) => {

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {todos.length > 0 ? (
          todos.map(todo => (
            <li key={todo.id} className={css.item}>
              <Todo title={todo.title} description={todo.description} purpose={todo.purpose} id={todo.id} done={todo.done} deleted={todo.deleted} />
            </li>
          ))
        ) : (
          <p>{message}</p>
        )}
      </ul>
    </div>
  );
};