import { Router } from "express";
import { Role } from "../Models/Role.model.js";

async function updateRole(role) {
  Role.findByIdAndUpdate({ _id: role._id }, role, function(err, model) {
    if (!model) new Role({ ...role }).save();
  });
}
async function getRoles() {
  const roles = await Role.find({});
  roles.sort(function(a, b) {
    return a.index - b.index;
  });

  return roles;
}
const rolesRoute = Router();

rolesRoute.get("/", async (req, res) => {
  const roles = await getRoles();
  res.json(roles);
});
rolesRoute.patch("/", (req, res) => {
  const roles = req.body.data;
  roles.forEach(async (role) => await updateRole(role));
});
rolesRoute.patch("/one", async (req, res) => {
  const role = req.body.data;
  await updateRole(role);
});
rolesRoute.post("/", async (req, res) => {
  const { role } = req.body.data;
  const newRole = new Role({ ...role });
  await newRole.save();

  const roles = await getRoles();
  res.json(roles);
});
rolesRoute.delete("/", async (req, res) => {
  const { role } = req.body;
  await Role.findByIdAndDelete(role._id);

  const roles = await getRoles();
  res.json(roles);
});
export default rolesRoute;
