import { useSelector } from 'react-redux';
import Hero from './components/Hero';
import TodoContainer from './components/TodoContainer';
import { useEffect } from 'react';
import { setLocalStorage } from './localStorage/localStorage';

function App() {
  const { lightTheme } = useSelector((store) => store.theme);
  const { todos } = useSelector((store) => store.todo);

  useEffect(() => {
    document.documentElement.className = `${
      lightTheme ? 'ligth-theme' : 'dark-theme'
    }`;
  }, [lightTheme]);

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

  return (
    <>
      <Hero />
      <TodoContainer />
    </>
  );
}

export default App;
