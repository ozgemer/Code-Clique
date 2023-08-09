import axiosinstance from '../Api/axios';

async function fetchMilestone() {
  return axiosinstance
    .get('/settings/milestones')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function updateMilestone(id, milestone) {
  return axiosinstance
    .patch(`/settings/milestones/${id}`, milestone)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
async function updateCompleted(id, completed) {
  return axiosinstance
    .patch(`/settings/milestones/completed/${id}`, completed)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
async function deleteMilestone(id, toDelete) {
  return axiosinstance
    .delete(`/settings/milestones/${id}/${toDelete}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function addNewMilestone(id, milestone) {
  return axiosinstance
    .post(`/settings/milestones/${id}`, milestone)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
export {
  fetchMilestone,
  updateMilestone,
  deleteMilestone,
  addNewMilestone,
  updateCompleted,
};
