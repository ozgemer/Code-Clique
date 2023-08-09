import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
  }
});

const Tag = mongoose.model("tags", TagSchema);

export { TagSchema, Tag };
