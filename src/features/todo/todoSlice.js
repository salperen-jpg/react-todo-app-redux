import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../../localStorage/localStorage';

import { initialState } from './initialState';

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.todo = action.payload;
    },
    handleSubmit: (state) => {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: state.todo,
        done: false,
      };
      setLocalStorage(state.todos);
      state.todos = [...state.todos, newTodo];
      state.todo = '';
    },
    filterTodos: (state, action) => {
      let tempTodos = [...state.todos];
      if (action.payload === 'All') {
        tempTodos = [...state.todos];
      }
      if (action.payload === 'Active') {
        tempTodos = state.todos.filter((todo) => todo.done === false);
      }
      if (action.payload === 'Completed') {
        tempTodos = state.todos.filter((todo) => todo.done === true);
      }
      state.filteredTodos = tempTodos;
    },
    clearCompleted: (state) => {
      const newTodos = state.filteredTodos.filter((todo) => todo.done !== true);
      state.filteredTodos = newTodos;
    },
    toggleFinished: (state, action) => {
      console.log(action.payload);

      const specItem = state.todos.find((todo) => todo.id === action.payload);
      specItem.done = !specItem.done;
    },
  },
});
export default todoSlice.reducer;

export const {
  handleChange,
  handleSubmit,
  filterTodos,
  clearCompleted,
  toggleFinished,
} = todoSlice.actions;
