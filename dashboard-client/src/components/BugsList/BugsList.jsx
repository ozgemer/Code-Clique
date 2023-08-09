import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Skeleton,
  Typography,
} from '@mui/material';
import { useState, useEffect } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import colors from '../../utils/Theme/ThemeColors';
import fetchBugsData from '../../utils/sevices/fetchTasksData.service';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const getSeverity = (createdAt) => {
  // for now the sevirity is determined by the date
  // if the bug is over a week old it is high
  // if the bug is between 3 and 7 days old it is medium
  // if the bug is less than 3 days old it is low
  // TBD, maybe admin can define their own severity? add severity to specific bugs?
  const date = new Date(createdAt);
  const diff = new Date() - date;
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (diffDays > 7) {
    return 1;
  }
  if (diffDays > 3) {
    return 2;
  }
  return 3;
};

function BugsList() {
  const [bugs, setbugs] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetchBugsData().then((data) => {
      const newData = [...data];
      newData.forEach((bug) => {
        bug.severity
          ? bug.severity
          : (bug.severity = getSeverity(bug.createdAt));
      });
      setbugs(newData);
      setloading(false);
    });
  }, []);

  const bugsicons = {
    1: <ErrorIcon sx={{ color: 'red' }} fontSize='large' />,
    2: <WarningIcon sx={{ color: 'yellow' }} fontSize='large' />,
    3: <LowPriorityIcon sx={{ color: 'green' }} fontSize='large' />,
  };
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          backgroundColor: colors.darkBlue,
          border: '0.1rem solid #1f1f53',
          '&:hover': {
            boxShadow: '0 0 20px -5px #1f1f53',
          },
        }}
        borderRadius='10px'
        paddingX={2}
        overflow='auto'
        maxHeight={400}
        minHeight={300}
        paddingY={2}
      >
        <Typography variant='h4' color={colors.yellow} textAlign='center'>
          High Priority Bugs
        </Typography>
        <List>
          <Divider sx={{ bgcolor: '#ababab' }} />
          {bugs.length === 0 && !loading && (
            <Typography variant='h6' textAlign='center' paddingTop={5}>
              No bugs found, keep it up!
              <ThumbUpIcon />
            </Typography>
          )}
          {!loading ? (
            bugs
              .sort((a1, a2) => a1.severity - a2.severity)
              .map((bug) => (
                <Box color='white' key={bug._id}>
                  <ListItem>
                    <ListItemIcon>
                      {bug.severity >= 3
                        ? bugsicons[3]
                        : bugsicons[bug.severity]}
                    </ListItemIcon>
                    <ListItemText
                      primary={bug.title}
                      secondary={`Since: ${new Date(
                        bug.createdAt
                      ).toLocaleDateString()}`}
                      secondaryTypographyProps={{ color: 'lightgray' }}
                    />
                    <ListItemText primary={bug.description} />
                  </ListItem>
                  <Divider sx={{ bgcolor: '#ababab' }} />
                </Box>
              ))
          ) : (
            <div>
              <Skeleton
                component={ListItem}
                height={250}
                animation='wave'
                sx={{ bgcolor: colors.blue, borderRadius: '10px' }}
              />
            </div>
          )}
        </List>
      </Box>
    </Grid>
  );
}

export default BugsList;
