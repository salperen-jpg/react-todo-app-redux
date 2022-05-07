import { useSelector } from 'react-redux';
import Hero from './components/Hero';
import TodoContainer from './components/TodoContainer';
import { useEffect } from 'react';

function App() {
  const { lightTheme } = useSelector((store) => store.theme);

  useEffect(() => {
    document.documentElement.className = `${
      lightTheme ? 'ligth-theme' : 'dark-theme'
    }`;
  }, [lightTheme]);

  return (
    <>
      <Hero />
      <TodoContainer />
    </>
  );
}

export default App;
