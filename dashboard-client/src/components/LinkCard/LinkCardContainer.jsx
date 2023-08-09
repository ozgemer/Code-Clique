import { Box, Grid, IconButton, Skeleton, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';
import LinkCard from './LinkCard';
import { fetchSettingsMockData } from '../../utils/sevices/fetchSettingsData.service';
import { useAxios } from 'masterClient/axiosContext';
function LinkCardContainer() {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const n = 3;
  useEffect(() => {
    fetchSettingsMockData().then((data) => {
      setLinks(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <Grid item className='projects' xs={12}>
      <Grid container justifyContent='flex-start' gap={5}>
        {!isLoading
          ? links.map((link) => (
              <Grid item key={link.link}>
                <Tooltip title={link.link}>
                  <IconButton
                    onClick={() => window.open(link.link, '_blank')}
                    sx={{ padding: 0 }}
                  >
                    <LinkCard Icon={link.Icon} title={link.title} />
                  </IconButton>
                </Tooltip>
              </Grid>
            ))
          : [...Array(n)].map((e, index) => (
              <Box display='flex' gap={3} key={index}>
                <Skeleton
                  variant='rectangle'
                  height={100}
                  width={150}
                  sx={{ borderRadius: '10px' }}
                  animation='wave'
                />
              </Box>
            ))}
      </Grid>
    </Grid>
  );
}

export default LinkCardContainer;
