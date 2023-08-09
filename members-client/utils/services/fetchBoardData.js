/* eslint-disable no-console */
import axiosinstance from "../api/axios";

async function getAllTasks() {
    return axiosinstance
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

async function getAllData() {
    try {
        const tasks = await getAllTasks();
        const boards = await getAllBoards();
        return { boards, tasks };
    } catch (error) {
        return error;
    }
}

export { getAllTasks, getAllBoards, getAllData };
