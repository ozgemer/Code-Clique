import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import colors from '../../utils/Theme/ThemeColors';
import DoughnutChart from './DoughnutChart';
import { fetchBoardMockData } from '../../utils/sevices/fetchSettingsData.service';

function PieChart() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchBoardMockData().then((data) => {
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
        <DoughnutChart chartData={data} />
      </Box>
    </Grid>
  );
}

export default PieChart;
