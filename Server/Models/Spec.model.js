import mongoose from 'mongoose';

const SpecSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    default: 'in progress',
  },
  participants: {
    type: Array,
    of: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  doc: {
    time: String,
    version: String,
    blocks: [],
  },
});

const newSpec = {
  participants: [],
  status: 'in-progress',
  doc: {
    blocks: [
      {
        type: 'header',
        data: { level: 1, text: 'New Spec' },
      },
      {
        type: 'paragraph',
        data: { text: 'this is an auto generated paragraph' },
      },
    ],
  },
};

const options = ['queued', 'in progress', 'on hold', 'done'];

const Spec = mongoose.model('specs', SpecSchema);

export { Spec, newSpec, options };
