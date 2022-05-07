import { createSlice } from '@reduxjs/toolkit';
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
        id: new Date().getDate().toString(),
        title: state.todo,
        done: false,
      };
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
      const newArray = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
          return todo;
        } else {
          return todo;
        }
      });
      state.todos = newArray;
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
