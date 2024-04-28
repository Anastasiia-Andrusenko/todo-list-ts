import React, { useEffect, useState } from 'react';
import { TodoList } from '../../components/TodoList/TodoList';
import { useStore } from 'react-redux';
import { TodoState } from '../../redux/types';


import css from './DeletedTodosPage.module.css';

const DeletedTodosPage: React.FC = () => {
  const store = useStore();
  const [deletedTodos, setDeletedTodos] = useState<TodoState['todos']>((store.getState() as TodoState).todos);

  useEffect(() => {
    const todos = (store.getState() as TodoState).todos;
    const filteredTodos = todos.filter(todo => todo.deleted);
    setDeletedTodos(filteredTodos);

    const unsubscribe = store.subscribe(() => {
      const updatedTodos = (store.getState() as TodoState).todos;
      const updatedFilteredTodos = updatedTodos.filter(todo => todo.deleted);
      setDeletedTodos(updatedFilteredTodos);

    });

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Deleted Todos</h2>
      <TodoList todos={deletedTodos} message='nothing has been deleted yet'/>
    </div>
  );
};

export default DeletedTodosPage;
