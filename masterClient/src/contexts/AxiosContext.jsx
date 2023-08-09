import { createContext, useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
const AxiosContext = createContext();

function AxiosProvider({ children }) {
  const [pid, setpid] = useState(0);
  const [URL, setURL] = useState('');
  const axiosinstance = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  useEffect(() => {
    console.log('pid changed ', pid);
    setURL(
      process.env.NODE_ENV === 'development'
        ? `http://localhost:5000/api/projects/${pid}/`
        : 'https://code-clique-backend.onrender.com/'
    );
    console.log('URL changed ', URL);
    axios.defaults.baseURL = URL;
    console.log('axios.defaults.baseURL', axios.defaults.baseURL);
  }, [pid]);

  axiosinstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['auth-token'] = token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  const pidSetter = (pid) => {
    setpid(pid);
  };
  return (
    <AxiosContext.Provider
      value={{
        sharedAxios: axiosinstance,
        pidSetter,
      }}
    >
      {children}
    </AxiosContext.Provider>
  );
}

const useAxios = () => {
  return useContext(AxiosContext);
};

export { AxiosProvider, useAxios };
