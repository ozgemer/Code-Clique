// import axiosinstance from '../../Api/axios';
import { useAxios } from 'masterClient/axiosContext';

async function fetchSettingsMockData(axiosinstance) {
  axiosinstance = useAxios().sharedAxios;
  return axiosinstance
    .get('/settings/links')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchBoardMockData() {
  axiosinstance = useAxios().sharedAxios;
  return axiosinstance
    .get('/board/tasks')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchAppointmentsData() {
  axiosinstance = useAxios().sharedAxios;
  return axiosinstance
    .get('/appointments')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { fetchSettingsMockData, fetchBoardMockData, fetchAppointmentsData };
