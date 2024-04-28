
export interface TodoItem {
  id: number;
  title: string;
  description: string;
  purpose: string;
  done: boolean;
  deleted: boolean;
};

export interface TodoState {
  todos: TodoItem[];
  message: string;
};



export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CREATE_TODO = 'CREATE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: TodoItem;
};

interface EditTodoAction {
  type: typeof EDIT_TODO;
  payload: {
    id: number;
    newTitle: string;
    newDescription: string;
    newPurpose: string;
  };
};

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: {id: number};
};

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {id: number};
};

interface CreateTodoAction {
  type: typeof CREATE_TODO;
  payload: TodoItem;
}


export type TodoActionTypes = AddTodoAction | EditTodoAction | ToggleTodoAction | DeleteTodoAction | CreateTodoAction;

export const createTodoAction = (id: number, title: string, description: string, purpose: string, done: boolean, deleted: boolean): CreateTodoAction => ({
  type: CREATE_TODO,
  payload: { id, title, description, purpose, done, deleted },
});