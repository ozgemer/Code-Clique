import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
export const LoginCard = styled(Card)({
  width: 570,
  height: 650,
  backgroundColor: '#0A0A1B',
  borderRadius: 5,
  paddingX: 7,
  paddingY: 10,
  border: '1px solid #1F1F53',
  boxShadow: '0px 0px 10px #1F1F5350',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 25,
  '@media (max-width: 600px)': {
    transform: 'scale(0.8)',
    width: 400,
    height: 550,
  },
});
