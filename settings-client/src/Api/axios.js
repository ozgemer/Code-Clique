import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'https://code-clique-backend.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosinstance;
