import { Grid, Typography } from '@mui/material';
import LinkCardContainer from '../components/LinkCard/LinkCardContainer';
import colors from '../utils/Theme/ThemeColors';
import PlaceHolderCard from '../components/Placeholders/PlaceHolderCard';
import PieChart from '../components/Chart/PieChart';
import BugsList from '../components/BugsList/BugsList';
import ProjectTimeline from '../components/ProjectTimeline/ProjectTimeline';
import WrapCalender from '../components/Calender/WrapCalender';

// The grid layout is correct, but the items are placholders.
// Each item will be separate component.
function Dashboard() {
  return (
    <Grid
      container
      justifyContent='space-between'
      columnSpacing={5}
      rowSpacing={5}
    >
      <Grid item xs={12} md={8}>
        <Grid container className='left-side' spacing={5}>
          <LinkCardContainer />
          <ProjectTimeline />
          <BugsList />
        </Grid>
      </Grid>
      <Grid
        item
        display='flex'
        flexDirection='column'
        className='right-side'
        gap={5}
        xs={12}
        md={4}
      >
        <PieChart />
        <WrapCalender />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
