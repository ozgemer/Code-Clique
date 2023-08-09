import mongoose from 'mongoose';
import { Milestone } from '../../Models/Settings.Models/Milestone.model.js';
import service from '../generic.service.js';
const MileStonesService = service(Milestone);

MileStonesService.addMileStone = async (id, item) => {
  return await Milestone.findByIdAndUpdate(id, {
    $push: { steps: item.newMilestone },
    $set: { completed: item.completed },
  });
};
MileStonesService.deleteMileStone = async (id, MilestoneId) => {
  return await Milestone.findByIdAndUpdate(id, {
    $pull: { steps: { _id: MilestoneId } },
  });
};
MileStonesService.updateMilestone = async (id, item) => {
  return await Milestone.updateOne(
    { _id: id, 'steps._id': item._id },
    { $set: { 'steps.$.title': item.title, 'steps.$.date': item.date } }
  );
};
MileStonesService.updateCompleted = async (id, completed) => {
  return await Milestone.updateOne({ _id: id }, { $set: { completed } });
};
export default MileStonesService;
