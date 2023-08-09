import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import colors from '../../utils/Theme/ThemeColors';
import { ColorlibConnector, ColorlibStepIcon } from './StyledMuiTimeline';
import fetchMilestoneMockData from '../../utils/sevices/fetchMilestoneData.service';

function ProjectTimeline() {
  const [loading, setloading] = useState(true);
  const [milestones, setMilestones] = useState([]);
  useEffect(() => {
    setloading(true);
    fetchMilestoneMockData().then((data) => {
      setMilestones(data[0]);
      setloading(false);
    });
  }, []);
  return (
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
        display='flex'
        flexDirection='column'
        gap={3}
        textAlign='center'
        width='100%'
      >
        <Typography variant='h4' color={colors.yellow}>
          Projects Milestones
        </Typography>
        {!loading ? (
          <Stepper
            alternativeLabel
            activeStep={milestones.completed}
            connector={<ColorlibConnector />}
            sx={{
              transform: {
                xs: 'scale(0.7)',
                md: 'scale(1)',
              },
            }}
          >
            {milestones.steps
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((event) => (
                <Step key={event.title}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    <Typography color={colors.white}>{event.title}</Typography>
                    <Typography color='#a3a3a3' variant='caption'>
                      {event.date.substring(0, 10)}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
          </Stepper>
        ) : (
          <Skeleton
            variant='rectangular'
            width='100%'
            height={120}
            animation='wave'
            sx={{ bgcolor: colors.blue, borderRadius: '10px' }}
          />
        )}
      </Box>
    </Grid>
  );
}

export default ProjectTimeline;
