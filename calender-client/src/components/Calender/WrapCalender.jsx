import { Box } from '@mui/material';
import Calender from './Calender';
import React, { useEffect, useState } from 'react';
import { fetchAppointmentsData } from '../../utils/services/fetchAppointmentsData.service';
import '../.././index.css';

function WrapCalender() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let today = new Date();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchAppointmentsData();
      setData(fetchedData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Box>loading... </Box>
  ) : (
    <Calender currentDate={today} appointmentsData={data} />
  );
}

export default WrapCalender;
