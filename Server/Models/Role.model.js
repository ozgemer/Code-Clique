import mongoose from "mongoose";
import { PermissionsSchema } from "./Permission.model.js";

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  permissions: {
    type: PermissionsSchema,
    default: {
      MANAGE_TASKS: false,
      MANAGE_USERS: false,
      MANAGE_ROLES: false
    }
  },
  index: {
    type: Number,
    required: true
  }
});

const Role = mongoose.model("roles", RoleSchema);

export { RoleSchema, Role };
