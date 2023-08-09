import mongoose from "mongoose";

const PermissionsSchema = new mongoose.Schema({
  MANAGE_TASKS: {
    type: Boolean,
    required: true
  },
  MANAGE_USERS: {
    type: Boolean,
    required: true
  },
  MANAGE_ROLES: {
    type: Boolean,
    required: true
  }
});

export { PermissionsSchema };
