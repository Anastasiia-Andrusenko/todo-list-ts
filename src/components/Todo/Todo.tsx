import css from './Todo.module.css';
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, editTodo } from '../../redux/actions';
import { useState } from 'react';

export const Todo = (todo: { title: string, description: string, purpose: string, id: number, done:boolean, deleted: boolean }) => {
  const [isDone, setIsDone] = useState(todo.done);
  const [isDeleted, setIsDeleted] = useState(todo.deleted);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDescription, setNewDescription] = useState(todo.description);
  const [newPurpose, setNewPurpose] = useState(todo.purpose);

  const dispatch = useDispatch();

  const handleDeleteTodo = (id: number) => {
    setIsDeleted(!isDeleted);
    const action = deleteTodo(id);
    dispatch(action);
  };

  const handleDoneTodo = (id: number) => {
    setIsDone(!isDone);
    const action = toggleTodo(id);
    dispatch(action);
  };

  const handleEditTodo = () => {
    setIsEditing(true);
  };

   const handleSubmitEdit = () => {
    const updatedTodo = {
      id: todo.id,
      newTitle: newTitle,
      newDescription: newDescription,
      newPurpose: newPurpose,
    };
     
    const action = editTodo(updatedTodo); 
      dispatch(action);
      setIsEditing(false);
  };

  return (
    <div className={css.card}>
      {isEditing ? (
        <div className={css.popup}>
          <input
            className={css.input}
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            className={css.inputDescription}
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <select className={css.inputList} id='purposes' value={newPurpose} onChange={(e) => setNewPurpose(e.target.value)}>
            <option value="work">work</option>
            <option value="personal">personal</option>
            <option value="education">education</option>
            <option value="other">other</option>
          </select>
          <button type="submit" className={css.btn} onClick={handleSubmitEdit}>edit <MdDoneAll /></button>
        </div>
      ) : (
        <>
          <p className={isDone ? css.doneTitle : css.title}>{todo.title}</p>
          <p className={css.description}>{todo.description}</p>
          <p className={css.purpose}>{todo.purpose}</p>
          <div className={css.cardSetting}>
            <div className={css.set} onClick={handleEditTodo}><FiEdit3/></div>
            <div className={isDone ? css.check : css.set} onClick={() => handleDoneTodo(todo.id)}><MdDoneOutline /></div>
            <div className={isDeleted ? css.deleted : css.set} onClick={() => handleDeleteTodo(todo.id)}><MdDeleteOutline /></div>
          </div>
        </>
      )}
    </div>
  )
};

