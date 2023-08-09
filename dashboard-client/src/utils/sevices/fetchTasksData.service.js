import axiosinstance from '../../Api/axios';

async function fetchBugsData() {
  return axiosinstance
    .get('/board/bugs')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default fetchBugsData;
