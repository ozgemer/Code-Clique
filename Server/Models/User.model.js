import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  image: {
    type: String,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "roles",
      required: true
    }
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tasks",
      required: true
    }
  ]
});

const User = mongoose.model("users", UserSchema);

export { UserSchema, User };
