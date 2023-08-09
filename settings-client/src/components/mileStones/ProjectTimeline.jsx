import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Skeleton,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ColorlibConnector, ColorlibStepIcon } from './StyledMuiTimeline';
import {
  fetchMilestone,
  updateMilestone,
  deleteMilestone,
  addNewMilestone,
  updateCompleted,
} from '../../services/milstonesApi.service';
import EditMileStone from './EditMileStone';
import DeleteDialog from './DeleteDialog';
import AddMileStone from './AddMileStone';

function ProjectTimeline({ openToaster }) {
  const [loading, setloading] = useState(true);
  const [milestones, setMilestones] = useState({});
  const [anchorEl, setAnchorEl] = useState(false);
  const [minmaxdate, setminmaxdate] = useState({});
  const [openEditDialog, setopenEditDialog] = useState(false);
  const [openDeleteDialog, setopenDeleteDialog] = useState(false);
  const [openAddDialog, setopenAddDialog] = useState(false);
  const [selected, setselected] = useState({});
  const menueopen = Boolean(anchorEl);
  const fetechMilestones = () => {
    setloading(true);
    fetchMilestone().then((data) => {
      setMilestones(data[0]);
      setloading(false);
    });
  };
  useEffect(() => {
    fetechMilestones();
  }, []);
  const handleClick = (event, step) => {
    setselected(step);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(false);
  };
  const handleEdit = (milestone) => {
    const newMilestone = milestones.steps.find(
      (step) => step._id === milestone._id
    );
    newMilestone.title = milestone.title;
    newMilestone.date = milestone.date;
    updateMilestone(milestones._id, newMilestone).then(() => {
      setopenEditDialog(false);
      openToaster('milestone updated');
      fetechMilestones();
    });
  };
  const onOpenEdit = () => {
    setopenEditDialog(true);
    setAnchorEl(null);
  };
  const onDelete = () => {
    deleteMilestone(milestones._id, selected._id)
      .then(() => {
        openToaster('milestone deleted');
        fetechMilestones();
      })
      .catch(() => {
        openToaster('milestone not deleted');
      });
    setAnchorEl(null);
    setopenDeleteDialog(false);
  };
  const onMarkAsComplete = () => {
    const completed =
      milestones.steps.indexOf(
        milestones.steps.find((step) => step._id === selected._id)
      ) + 1;
    updateCompleted(milestones._id, { completed }).then(() => {
      openToaster('milestone marked as complete');
      fetechMilestones();
    });
    setAnchorEl(false);
  };
  const onOpenAddNew = (action) => {
    const s = milestones.steps.find((step) => step._id === selected._id);
    const index = milestones.steps.indexOf(s);
    if (action === 'after') {
      setminmaxdate({
        min: milestones.steps[index].date,
        max: milestones.steps[index + 1]?.date || null,
      });
    } else {
      setminmaxdate({
        min: milestones.steps[index - 1]?.date || null,
        max: milestones.steps[index].date,
      });
    }
    setopenAddDialog(true);
    setAnchorEl(false);
  };
  const onAddNew = (milestone) => {
    // calculate the new index for completed
    let completed = milestones.completed;
    const newMilestone = {
      title: milestone.title,
      date: milestone.date,
    };
    if (
      new Date(milestones.steps[milestones.completed - 1].date).getTime() >
      new Date(milestone.date).getTime()
    ) {
      completed++;
    }

    addNewMilestone(milestones._id, { newMilestone, completed })
      .then(() => {
        openToaster('milestone added');
        fetechMilestones();
      })
      .catch(() => {
        openToaster('milestone not added');
      });
    fetechMilestones();
    setopenAddDialog(false);
    setAnchorEl(false);
    setminmaxdate({});
  };

  return (
    <Box display='flex' flexDirection='column' rowGap={3}>
      {!loading ? (
        <>
          <Stepper
            alternativeLabel
            activeStep={milestones.completed}
            connector={<ColorlibConnector />}
          >
            {milestones.steps
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((step) => (
                <Step key={step._id}>
                  <StepLabel
                    StepIconComponent={ColorlibStepIcon}
                    onClick={(e) => handleClick(e, step)}
                  >
                    <Typography color='secondary'>{step.title}</Typography>
                    <Typography color='#a3a3a3' variant='caption'>
                      {step.date.substring(0, 10)}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
          </Stepper>
        </>
      ) : (
        <Skeleton
          variant='rectangular'
          width='100%'
          height={120}
          animation='wave'
          sx={{ bgcolor: 'Background.primary', borderRadius: '10px' }}
        />
      )}
      <Menu
        anchorEl={anchorEl}
        open={menueopen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={onOpenEdit}>Edit</MenuItem>
        <MenuItem onClick={() => setopenDeleteDialog(true)}>Delete</MenuItem>
        <MenuItem onClick={onMarkAsComplete}>Mark As Complete</MenuItem>
        <MenuItem onClick={() => onOpenAddNew('after')}>Add after</MenuItem>
        <MenuItem onClick={() => onOpenAddNew('before')}>Add before</MenuItem>
      </Menu>
      <EditMileStone
        mileStone={selected}
        handleEdit={handleEdit}
        open={openEditDialog}
        onClose={() => setopenEditDialog(false)}
      />
      <DeleteDialog
        open={openDeleteDialog}
        setOpen={setopenDeleteDialog}
        onDelete={onDelete}
      />
      <AddMileStone
        open={openAddDialog}
        onClose={() => setopenAddDialog(false)}
        minmaxdate={minmaxdate}
        handleAddNew={onAddNew}
        minDate={minmaxdate.min}
        maxDate={minmaxdate.max}
      />
    </Box>
  );
}

export default ProjectTimeline;
