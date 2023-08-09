import { Appointment } from '../../Models/Appointment.model.js';
import { ObjectId } from 'bson';

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const getAppointmentById = async (req, res) => {
  let _id = null;
  try {
    _id = ObjectId(req.params.id);
  } catch (e) {
    return res.status(400).json({ error: 'invalid id!' });
  }
  try {
    const appointment = await Appointment.findById(_id);
    if (!appointment) return res.status(400).json({ error: 'appointment not found!' });
    res.status(200).json(appointment);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const addAppointment = async (req, res) => {
  try {
    await Appointment.create(req.body);
    const appointments = await Appointment.find({});
    res.json(appointments);
    console.info('The user: ' + req.rawHeaders[19] + ' is added a appointment!');
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server Error!' });
  }
};

const setAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.findOneAndUpdate({ _id: id }, req.body);
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (error) {
    console.log(error);
  }
};

const removeAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.findByIdAndDelete({ _id: id });
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (error) {
    console.log(error);
  }
};

export {
    addAppointment,
    getAllAppointments,
    getAppointmentById,
    removeAppointmentById,
    setAppointmentById,
};
