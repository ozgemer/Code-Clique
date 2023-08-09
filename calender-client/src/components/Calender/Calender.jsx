import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Scheduler,
  MonthView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DateNavigator,
  Toolbar,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from '@devexpress/dx-react-scheduler';
import {
  postAppointment,
  deleteAppointment,
  patchAppointment,
} from '../../utils/services/fetchAppointmentsData.service';

function Calender({ currentDate, appointmentsData }) {
  const [dataApp, setDataApp] = useState(appointmentsData);

  const commitChanges = async ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        dataApp.length > 0 ? parseInt(dataApp[dataApp.length - 1].id) + 1 : 0;
      const newData = await postAppointment({
        id: startingAddedId.toString(),
        ...added,
      });
      setDataApp(newData);
    }
    if (changed) {
      const changedId = Object.keys(changed)[0];
      const changedApp = dataApp.filter(
        (appointment) => appointment.id == changedId
      );
      const newData = await patchAppointment(changedApp[0]._id, {
        ...changed[changedId],
      });
      setDataApp(newData);
    }
    if (deleted) {
      const deletedId = dataApp.filter(
        (appointment) => appointment.id == deleted
      );
      const newData = await deleteAppointment(deletedId[0]._id);
      setDataApp(newData);
    }
  };

  return (
    <Paper>
      <Scheduler data={dataApp}>
        <ViewState defaultCurrentDate={currentDate} />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <MonthView />
        <ConfirmationDialog />
        <Toolbar />
        <DateNavigator />
        <Appointments />
        <AppointmentTooltip showOpenButton showCloseButton showDeleteButton />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
}

export default Calender;
