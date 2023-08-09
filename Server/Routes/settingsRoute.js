import express from 'express';
import LinkService from '../Services/SettingsService/Links.service.js';
import MileStonesService from '../Services/SettingsService/MileStones.service.js';

const router = express.Router();

router.get('/links', async (req, res) => {
  const links = await LinkService.getAll();
  res.send(links);
});

router.post('/links', async (req, res) => {
  const { Icon, title, link } = req.body;
  const newLink = await LinkService.add({ Icon, title, link });
  res.send(newLink);
});

router.delete('/links', async (req, res) => {
  console.log(req.body.link.id);
  const id = req.body.link.id;
  const deletedLink = await LinkService.remove(id);
  res.json(deletedLink);
}),
  router.get('/milestones', async (req, res) => {
    const milestones = await MileStonesService.getAll();
    res.send(milestones);
  });

router.patch('/milestones/completed/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  console.log(id, completed);
  const updatedMilestone = MileStonesService.updateCompleted(id, completed);
  res.send(updatedMilestone);
});
router.patch('/milestones/:id/', (req, res) => {
  const { id } = req.params;
  const milestone = req.body;
  console.log(id, milestone);
  const updatedMilestone = MileStonesService.updateMilestone(id, milestone);
  res.send(updatedMilestone);
});
router.delete('/milestones/:id/:toDelete', async (req, res) => {
  const { id, toDelete } = req.params;
  const deleted = await MileStonesService.deleteMileStone(id, toDelete);
  res.json(deleted);
});
router.post('/milestones/:id', async (req, res) => {
  const { id } = req.params;
  const milestone = req.body;
  const newMilestone = await MileStonesService.addMileStone(id, milestone);
  res.json(newMilestone);
});

export default router;
