import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { CreateTodo } from './components/CreateTodo/CreateTodo';

import css from './App.module.css';
import Navigation from './components/Navigation/Navigation';

const AllTodosPage = lazy(() => import('./pages/AllTodosPage/AllTodosPage'));
const DoneTodosPage = lazy(() => import('./pages/DoneTodosPage/DoneTodosPage'));
const DeletedTodosPage = lazy(() => import('./pages/DeletedTodosPage/DeletedTodosPage'));

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
  }, [dispatch]);

  return (
      <div className={css.app}>
        <div className={css.sidebar}>
          <CreateTodo />
      </div>
      <div className={css.main}>
        <Navigation/>
      <Suspense fallback={null}>
        <Routes >
          <Route index element={<AllTodosPage/>} />
          <Route path="/done" element={<DoneTodosPage/>} />
          <Route path='/deleted' element={<DeletedTodosPage/>} />
        </Routes>
      </Suspense>
      </div>
      </div>
  );
}

export default App;
