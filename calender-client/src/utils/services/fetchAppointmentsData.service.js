import axiosinstance from '../../Api/axios';

async function fetchAppointmentsData() {
  try {
    const data = await axiosinstance.get('/appointments');
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function postAppointment(appointment) {
  try {
    const data = await axiosinstance.post(`/appointments`, appointment);
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteAppointment(id) {
  try {
    const data = await axiosinstance.delete(`/appointments/${id}`);
    console.log(data.data)
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

async function patchAppointment(id, appointment) {
  try {
    const data = await axiosinstance.patch(`/appointments/${id}`, appointment);
    console.log(data.data)
    return data.data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchAppointmentsData, postAppointment, deleteAppointment, patchAppointment };
