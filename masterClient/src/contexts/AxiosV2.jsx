import axios from 'axios';

const axiosinstance = (pid) => {
  const URL =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:5000/api/projects/${pid}/`
      : 'https://code-clique-backend.onrender.com/';
  axios.defaults.baseURL = URL;
  axios.interceptors.request.use(
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
  return axios;
};

export default axiosinstance;
