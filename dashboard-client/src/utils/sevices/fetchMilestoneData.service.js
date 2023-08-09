import axiosinstance from '../../Api/axios';

async function fetchMilestoneMockData() {
  return axiosinstance
    .get('/settings/milestones')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default fetchMilestoneMockData;
