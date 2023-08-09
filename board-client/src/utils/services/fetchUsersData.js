import axiosinstance from '../api/axios';

async function fetchUsersData() {
  return axiosinstance
    .get('/members')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

export default fetchUsersData;
