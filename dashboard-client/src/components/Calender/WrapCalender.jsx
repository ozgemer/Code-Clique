import { Box, Grid } from '@mui/material';
import Calender from './Calender';
import React, { useEffect, useState } from 'react';
import colors from '../../utils/Theme/ThemeColors';
import { fetchAppointmentsData } from '../../utils/sevices/fetchSettingsData.service';
import '../.././index.css';
const moment = require('moment');

function Wrapalender() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let today = new Date();
  const date = moment(today).format('YYYY-MM-DD');
  useEffect(() => {
    fetchAppointmentsData().then((data) => {
      setData(data);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <Box>loading... </Box>
  ) : (
    <Grid item className='projects' xs={12}>
      <Box
        sx={{
          backgroundColor: colors.darkBlue,
          border: '0.1rem solid #1f1f53',
          '&:hover': {
            boxShadow: '0 0 20px -5px #1f1f53',
          },
        }}
        borderRadius='10px'
        padding={3}
      >
        <Calender currentDate={date} appointmentsData={data} today={today} />
      </Box>
    </Grid>
  );
}

export default Wrapalender;
