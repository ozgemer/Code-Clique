import mongoose from 'mongoose';

const MilestoneSchema = new mongoose.Schema(
  {
    completed: {
      type: Number,
      default: 0,
    },
    steps: [
      {
        title: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Milestone = mongoose.model('milestones', MilestoneSchema);
export { MilestoneSchema, Milestone };
