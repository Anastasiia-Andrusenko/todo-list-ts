
import React, { useEffect, useState } from 'react';
import css from './AllTodosPage.module.css';
import { TodoList } from '../../components/TodoList/TodoList';
import { useStore } from 'react-redux';
import { TodoState } from '../../redux/types';

const AllTodosPage: React.FC = () => {
  const store = useStore();
  const [todos, setTodos] = useState<TodoState['todos']>((store.getState() as TodoState).todos);

  useEffect(() => {
    const todos = (store.getState() as TodoState).todos;
    const todosNoDeleted = todos.filter(todo => !todo.deleted);
    setTodos(todosNoDeleted);

    const unsubscribe = store.subscribe(() => {
      const updatedTodos = (store.getState() as TodoState).todos;
      const updatedTodosNoDeleted = updatedTodos.filter(todo => !todo.deleted);
      setTodos(updatedTodosNoDeleted);
    });

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>All Todos</h2>
      <TodoList todos={todos} message='no item'/>
    </div>
  );
};

export default AllTodosPage;
