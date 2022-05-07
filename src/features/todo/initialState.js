import data from '../../components/data';
export const initialState = {
  todo: '',
  todos: data,
  filteredTodos: [...data],
};
