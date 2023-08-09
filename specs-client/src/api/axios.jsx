import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/specs'
    : 'https://code-clique-backend.onrender.com/specs';

const axiosinstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosinstance;
