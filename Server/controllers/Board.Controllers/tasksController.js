import { Task } from '../../Models/Board.Models/Task.model.js';
import { ObjectId } from 'bson';

const getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find({});
    return res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const getTaskById = async (req, res) => {
  let _id = null;
  try {
    _id = ObjectId(req.params.id);
  } catch (e) {
    return res.status(400).json({ error: 'Invalid Id!' });
  }
  try {
    const tasks = await Task.findById(_id);
    if (!tasks) return res.status(400).json({ error: 'Task Not Found!' });
    res.status(200).json(tasks);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const addTask = async (req, res) => {
  try {
    await Task.create(req.body);
    res
      .status(200)
      .json({ info: 'New Task Added Successfuly!', task: req.body });
    console.info('The user: ' + req.rawHeaders[19] + ' is added a task!');
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const setTaskById = async (req, res) => {
  try {
    let result = await Task.updateOne({ _id: req.body._id }, req.body);
    if (!result)
      return res.status(400).json({ error: 'There Is No Such Task!' });
    console.info('The user: ' + req.rawHeaders[19] + ' is updated a task!');
    const tasks = await Task.find({});
    return res
      .status(200)
      .json({ info: 'Task Updated Successfuly!', tasks: tasks });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const removeTaskById = async (req, res) => {
  let _id = null;
  try {
    _id = ObjectId(req.params.id);
  } catch (e) {
    console.error(e);
    return res.status(400).json({ error: 'Invalid Id!' });
  }
  try {
    const task = await Task.findByIdAndDelete({ _id: req.params.id });
    if (task) {
      res.status(200).json({ info: 'Task Deleted Successfuly!' });
      console.info('The user: ' + req.rawHeaders[18] + ' is deleted a task!');
      return;
    }
    return res.status(400).json({ error: 'Task Not Exsits!' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error!' });
  }
};
const getAllBugs = async (req, res) => {
  try {
    let bugs = await Task.find({
      'tags.title': 'bug',
      status: { $nin: ['archive', 'closed'] },
    });
    return res.status(200).json(bugs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error!' });
  }
};
export {
  getAllTasks,
  getTaskById,
  addTask,
  setTaskById,
  removeTaskById,
  getAllBugs,
};
