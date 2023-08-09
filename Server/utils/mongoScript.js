import 'dotenv/config';
import mongoConnect from '../Config/mongoConnect.js';
import tasks from '../data/tasksData.js';
import { Task } from '../Models/Board.Models/Task.model.js';

mongoConnect();

const importData = async () => {
  try {
    await Task.deleteMany({});
    await Task.insertMany(tasks);

    console.log('data imported success!');
    process.exit();
  } catch (error) {
    console.error(error);
    console.error('error with data import');
    process.exit(1);
  }
};

export default importData;

importData();
