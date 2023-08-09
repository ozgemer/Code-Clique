import express from 'express';
import {
  getAllSpecs,
  getSpecById,
  addSpec,
  deleteSpec,
  updateSpec,
  updateSpecStatus,
  getStatusOptions,
  searchSpecs,
} from '../controllers/Spec.Controllers/specController.js';

const router = express.Router();

router.get('/', getAllSpecs);

router.post('/add', addSpec);

router.get('/status', getStatusOptions);

router.post('/search', searchSpecs);

router.post('/update/:id', updateSpec);

router.get('/remove/:id', deleteSpec);

router.put('/status/:id', updateSpecStatus);

router.get('/:id', getSpecById);

export default router;
