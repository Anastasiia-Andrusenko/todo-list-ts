

import { createReducer } from '@reduxjs/toolkit';

import { addTodo, deleteTodo, editTodo, toggleTodo } from './actions';
import { TodoItem } from './types';

const initialState: TodoItem [] = [];

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        purpose: action.payload.purpose,
        done: false,
        deleted: false,
      });
    })
    .addCase(editTodo, (state, action) => {
      const todoToEdit = state.find((todo) => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.title = action.payload.newTitle;
        todoToEdit.description = action.payload.newDescription;
        todoToEdit.purpose = action.payload.newPurpose;
      }
    })
    .addCase(toggleTodo, (state, action) => {
      const todoToToggle = state.find((todo) => todo.id === action.payload);
      if (todoToToggle) {
        todoToToggle.done = !todoToToggle.done;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      const todoToDelete = state.find((todo) => todo.id === action.payload);
      if (todoToDelete) {
        todoToDelete.deleted = !todoToDelete.deleted;
      }
    });
});

export default todoReducer;
