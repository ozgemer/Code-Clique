import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import AddLink from './components/links/AddLink';
import { onAddLink } from './components/links/addLinkLogic';
import DeleteLink from './components/links/DeleteLink';
import ProjectTimeline from './components/mileStones/ProjectTimeline';
import { ToastContainerStyled } from './utils/Toaster.styled';
function SettingsContent() {
  const RolesContent = React.lazy(() => import('rolesClient/RolesContent'));
  const [toasterOpen, settoasterOpen] = useState(false);
  const openToaster = (message) => {
    toast(message);
  };

  return (
    <React.Suspense>
      <Box
        maxWidth="1000px"
        padding={{ xs: 2, sm: 3, md: 4 }}
        margin={1}
        backgroundColor={'rgb(10 10 27)'}
        sx={{
          borderRadius: '1rem',
          border: '0.1rem solid rgb(31, 31, 83)',
        }}
      >
        <Grid container rowGap={8}>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Typography variant="h4" color="primary">
                Links
              </Typography>
            </Divider>
          </Grid>
          <Grid container xs={3} alignItems="end">
            <Typography variant="h6">Add a link</Typography>
          </Grid>
          <Grid item xs={9} alignSelf="flex-start">
            <AddLink onAddLink={onAddLink} openToaster={openToaster} />
          </Grid>
          <Grid container xs={3} alignItems="end">
            <Typography variant="h6">Delete a Link</Typography>
          </Grid>
          <Grid item xs={9} alignSelf="flex-start">
            <DeleteLink openToaster={openToaster} />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Typography variant="h4" color="primary">
                Mile Stones
              </Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <ProjectTimeline openToaster={openToaster} />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Typography variant="h4" color="primary">
                Roles
              </Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <RolesContent />
          </Grid>
        </Grid>

        <ToastContainerStyled theme="dark" position="bottom-right" />
      </Box>
    </React.Suspense>
  );
}

export default SettingsContent;
