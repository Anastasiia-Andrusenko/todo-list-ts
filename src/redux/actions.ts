
import { createAction } from '@reduxjs/toolkit';

import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from './types';

export const addTodo = createAction<{ id: number, title: string, description: string, purpose: string, done: boolean, deleted: boolean }>(ADD_TODO);

export const editTodo = createAction<{ id: number, newTitle: string, newDescription: string, newPurpose: string }>(EDIT_TODO);

export const toggleTodo = createAction<number>(TOGGLE_TODO);

export const deleteTodo = createAction<number>(DELETE_TODO);
