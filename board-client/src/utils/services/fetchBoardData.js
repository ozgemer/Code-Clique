/* eslint-disable no-console */
import axiosinstance from '../api/axios';
const { axios } = window;

async function getAllTasks() {
  return axios
    .get('/board/tasks')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
}

async function getAllBoards() {
  return axiosinstance
    .get('/board/boards')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
}

async function getAllTags() {
  return axiosinstance
    .get('/board/tags')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response;
    });
}

async function postTask(task) {
  return axiosinstance
    .post(`/board/tasks`, task)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

async function deletTask(id) {
  return axiosinstance
    .delete(`/board/tasks/${id}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

async function patchTask(id, task) {
  return axiosinstance
    .patch(`/board/tasks/${id}`, task)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

async function patchBoard(id, board) {
  return axiosinstance
    .patch(`/board/boards/${id}`, board)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

async function getAllData() {
  try {
    const tasks = await getAllTasks();
    const boards = await getAllBoards();
    const tags = await getAllTags();
    return { boards, tasks, tags };
  } catch (error) {
    return error;
  }
}

export {
  getAllData,
  getAllTasks,
  postTask,
  deletTask,
  patchTask,
  getAllTags,
  getAllBoards,
  patchBoard,
};
