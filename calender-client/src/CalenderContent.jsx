import React from 'react';
import { Grid } from '@mui/material';
import WrapCalender from './components/Calender/WrapCalender';

function CalenderContent() {
  return (
    <Grid container direction='column'>
      <Grid item xs={12} sm={6}>
        <WrapCalender />
      </Grid>
    </Grid>
  );
}

export default CalenderContent;
