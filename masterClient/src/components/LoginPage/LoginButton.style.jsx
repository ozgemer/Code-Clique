import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

export const LoginButton = styled(LoadingButton)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 330,
  height: 55,
  borderRadius: 5,
  padding: 10,
  marginTop: 25,
  textTransform: 'none',
});
