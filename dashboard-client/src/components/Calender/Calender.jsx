import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

function Calender({ currentDate, appointmentsData, today }) {
  return (
    <Paper>
      <Scheduler data={appointmentsData} height={500}>
        <ViewState currentDate={currentDate} />
        <DayView
          startDayHour={today.getHours() - 4}
          endDayHour={today.getHours() + 4}
        />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}

export default Calender;
