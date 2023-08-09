import mongoose from 'mongoose';

const LinkSchema = new mongoose.Schema(
  {
    Icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.model('links', LinkSchema);

export { LinkSchema, Link };
