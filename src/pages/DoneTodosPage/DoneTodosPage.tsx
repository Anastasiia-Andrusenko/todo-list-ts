
import React, { useEffect, useState } from 'react';
import { TodoList } from '../../components/TodoList/TodoList';
import { useStore } from 'react-redux';
import { TodoState } from '../../redux/types';

import css from './DoneTodosPage.module.css';

const DoneTodosPage: React.FC = () => {
  const store = useStore();
  const [doneTodos, setDoneTodos] = useState<TodoState['todos']>((store.getState() as TodoState).todos);

  useEffect(() => {
    const todos = (store.getState() as TodoState).todos;
    const filteredTodos = todos.filter(todo => todo.done && !todo.deleted);
    setDoneTodos(filteredTodos);

    const unsubscribe = store.subscribe(() => {
      const updatedTodos = (store.getState() as TodoState).todos;
      const updatedFilteredTodos = updatedTodos.filter(todo => todo.done && !todo.deleted);
      setDoneTodos(updatedFilteredTodos);

    });

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Done Todos</h2>
      <TodoList todos={doneTodos} message='nothing done yet'/>
    </div>
  );
};

export default DoneTodosPage;