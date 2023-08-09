import { Router } from "express";
import { User } from "../Models/User.model.js";

async function updateUser(user) {
  User.findByIdAndUpdate({ _id: user._id }, user, function(err, model) {
    if (!model) new User({ ...user }).save();
  });
}
async function getUsers() {
  const users = await User.find({}).populate("roles").exec();
  return users;
}
async function deleteUser(user) {
  await User.findByIdAndDelete(user._id);
}
const usersRoute = Router();

usersRoute.get("/", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

usersRoute.patch("/", async (req, res) => {
  const { user } = req.body.data;
  await updateUser(user);
  const newUsers = await getUsers();
  res.json(newUsers);
});

usersRoute.post("/", async (req, res) => {
  const { user } = req.body.data;
  await updateUser(user);
  const newUsers = await getUsers();
  res.json(newUsers);
});

usersRoute.delete("/", async (req, res) => {
  const { user } = req.body;
  await deleteUser(user);
  const newUsers = await getUsers();
  res.json(newUsers);
});

export default usersRoute;
