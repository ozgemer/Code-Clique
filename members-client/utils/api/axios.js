import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/'
    : 'https://code-clique-backend.onrender.com/';

const axiosinstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'auth-token': localStorage.getItem('token'),
  },
});

export default axiosinstance;
