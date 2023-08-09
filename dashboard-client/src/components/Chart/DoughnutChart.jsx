import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';
import { getTasksData } from '../../helpers/chart.helper';
import { Typography } from '@mui/material';
import colors from '../../utils/Theme/ThemeColors';
import { doughnutOptions, percentage } from '../../constants/chart.constant';

function DoughnutChart({ chartData }) {
  const doughnutData = getTasksData(chartData);
  return (
    <div style={styles.chartContainer}>
      <Typography variant='h4' color={colors.yellow} textAlign='center'>
        Tasks Status
      </Typography>
      <div style={styles.container}>
        <Doughnut
          data={doughnutData}
          options={doughnutOptions}
          plugins={[percentage]}
        />
      </div>
    </div>
  );
}

const styles = {
  chartContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  container: {
    position: 'relative',
    width: '80%',
    height: '80%',
    minWidth: '200px',
    minHeight: '200px',
  },
};

export default DoughnutChart;
