import mongoose from 'mongoose';
import { TagSchema } from './Tag.model.js';

const TaskSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: 'todo',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tags: [
      {
        type: TagSchema,
        required: true,
      },
    ],
    assignee: {
      type: String,
    },
    index: [
      {
        type: Object,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// {
//   id: uuidv4(),
//   status: 'todo',
//   title: 'Add a chart showing the active bugs by priority.',
//   description: '',
//   tags: [{ title: 'bug', color: '#d41e18' }],
//   assignee: 'Alon manshari',
//   index: [],
//   createdAt: '2022-08-01',
// },

const Task = mongoose.model('tasks', TaskSchema);

export { TaskSchema, Task };
