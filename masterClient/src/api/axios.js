import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/'
    : 'https://code-clique-backend.onrender.com/';

const axiosinstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export default axiosinstance;
