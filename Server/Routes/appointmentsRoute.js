import express from 'express';
import {
  addAppointment,
  getAllAppointments,
  getAppointmentById,
  removeAppointmentById,
  setAppointmentById,
} from '../controllers/Calender.Controllers/appointmentsController.js';

const router = express.Router();

router.get('/', getAllAppointments);
router.get('/:id', getAppointmentById);
router.post('/', addAppointment);
router.patch('/:id', setAppointmentById);
router.delete('/:id', removeAppointmentById);

export default router;
