import { GrDocumentMissing } from 'react-icons/gr';
import { CardWrapper, CardHeader, CardBody } from './Card.style';
import icons from '../../utils/Configs/links.icons.config';
import StyledReactIcon from './ReactIcon.style';
import { Typography } from '@mui/material';
import colors from '../../utils/Theme/ThemeColors';

function LinkCard({ Icon, title }) {
  return (
    <>
      <CardWrapper
        sx={{
          backgroundColor: colors.darkBlue,
          border: '0.1rem solid #1f1f53',
          '&:hover': {
            boxShadow: '0 0 20px -5px #1f1f53',
          },
        }}
      >
        {icons[Icon] || <StyledReactIcon ReactIcon={GrDocumentMissing} />}
        <Typography variant='body1'>{title}</Typography>
      </CardWrapper>
    </>
  );
}

export default LinkCard;
