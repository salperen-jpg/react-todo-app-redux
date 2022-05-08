import data from '../components/data';

export const setLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const getLocalStorage = () => {
  return localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : data;
};
