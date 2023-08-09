import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  allDay: {
    type: Boolean,
  }
});

const Appointment = mongoose.model("appointments", AppointmentSchema);

export { AppointmentSchema, Appointment };
