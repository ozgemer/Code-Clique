import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const selectedPageContext = createContext();
const setSelectedPageContext = createContext();

function useSelectedPage() {
  return useContext(selectedPageContext);
}

function useSetSelectedPage() {
  return useContext(setSelectedPageContext);
}

function PageContext({ children }) {
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const location = useLocation();
  useEffect(() => {
    const capitalized = `${location.pathname
      .slice(1)
      .charAt(0)
      .toUpperCase()}${location.pathname.slice(2)}`;
    setSelectedPage(capitalized);
  }, [location.pathname]);

  return (
    <selectedPageContext.Provider value={selectedPage}>
      <setSelectedPageContext.Provider value={setSelectedPage}>
        {children}
      </setSelectedPageContext.Provider>
    </selectedPageContext.Provider>
  );
}

export { PageContext, useSelectedPage, useSetSelectedPage };
