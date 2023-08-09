import mongoose from 'mongoose';
import { TagSchema } from './Tag.model';

const TaskSchema = new mongoose.Schema({
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
  index: {
    type: Number,
  },
  assigne: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
});

const Task = mongoose.model('tasks', TaskSchema);

export { TaskSchema, Task };
