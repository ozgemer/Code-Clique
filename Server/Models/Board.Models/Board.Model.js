import mongoose from 'mongoose';
import { TaskSchema } from './Task.model.js';

const BoardSchema = new mongoose.Schema({
  columns: [
    {
      title: {
        type: String,
        required: true,
      },
      color: {
        type:String,
      },
      tasks: [
        {
          type: TaskSchema,
          required: true
        }
      ],
    },
  ],
});

const Board = mongoose.model('boards', BoardSchema);

export { BoardSchema, Board };