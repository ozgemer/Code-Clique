import express from 'express';
import tasks from '../Data/tasksData.js';
import {
  addTask,
  getAllBugs,
  getAllTasks,
  getTaskById,
  removeTaskById,
  setTaskById,
} from '../controllers/Board.Controllers/tasksController.js';
import {
  getAllBoards,
  setBoardById,
} from '../controllers/Board.Controllers/boardController.js';
import { getAllTags } from '../controllers/Board.Controllers/tagsController.js';
import { verifyAuth } from '../utils/auth/auth.middleware.js';

const router = express.Router();

const tempTasks = [...tasks];

router.get('/boards', getAllBoards);
router.get('/boards/:id', setBoardById);

router.get('/tasks', getAllTasks);
router.get('/bugs', getAllBugs);
router.get('/tasks/:id', getTaskById);
router.post('/tasks',verifyAuth, addTask);
router.patch('/tasks/:id', setTaskById);
router.delete('/tasks/:id', removeTaskById);

router.get('/tags', getAllTags);

router.get('/bugs', (req, res) => {
  res.json(tempTasks.filter((task) => task.tags.includes('bug')));
});
export default router;
