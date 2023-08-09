import { Box, Grid, Typography } from '@mui/material';
import colors from '../../utils/Theme/ThemeColors';

function PlaceHolderCard({ title }) {
  return (
    <Grid item className='projects'>
      <Box bgcolor={colors.darkBlue} borderRadius='10px' padding={3}>
        <Typography variant='h4' color={colors.yellow}>
          {title}
        </Typography>
        <Typography variant='body1' color={colors.white}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          odit delectus soluta vitae fugiat quod aperiam ea totam repellendus
          ut? Doloremque rerum eum, totam animi nemo provident adipisci minus
          nulla!
        </Typography>
      </Box>
    </Grid>
  );
}

export default PlaceHolderCard;
