import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import axiosinstance from '../api/axios';
import { useAxios } from 'masterClient/axiosContext';
const ProjectContext = createContext();

function ProjectProvider({ children }) {
  const { Provider } = ProjectContext;
  const [projectState, setProjectState] = useState({});
  const ax = useAxios();
  const fetchProject = async () => {
    const { data } = await axiosinstance.get('/mock');

    ax.pidSetter(data._id);
    setProjectState(data);
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <Provider
      value={{
        projectState,
        setProjectState,
      }}
    >
      {children}
    </Provider>
  );
}

const useProject = () => {
  return useContext(ProjectContext);
};

export { ProjectProvider, useProject };
