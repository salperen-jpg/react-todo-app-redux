import data from '../../components/data';
import { getLocalStorage } from '../../localStorage/localStorage';
export const initialState = {
  todo: '',
  todos: getLocalStorage(),
  filteredTodos: [...data],
};
