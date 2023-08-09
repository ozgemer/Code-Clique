import axiosinstance from '../Api/axios';

async function postNewLink(link) {
  return axiosinstance
    .post('/settings/links', link)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
async function deleteLink(link) {
  return axiosinstance
    .delete('/settings/links', { data: { link } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
async function getLinks() {
  return axiosinstance
    .get('/settings/links')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
export { postNewLink, deleteLink, getLinks };
