import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LoadingButton } from '@mui/lab';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import validator from 'validator';
import axiosinstance from '../api/axios';
import bgimage from '../assets/images/bgimage.png';
import { LoginButton } from '../components/LoginPage/LoginButton.style';
import { LoginCard } from '../components/LoginPage/LoginCard.style';
import { useAuth } from 'masterClient/authContext';
import colors from '../util/theme/colors';

function Login() {
  const authContext = useAuth();
  const [error, seterror] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    setloading(true);
    if (event.preventDefault) {
      event.preventDefault();
    }
    const userInfo = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    let newGuest = false;
    if (!localStorage.getItem('visited')) {
      newGuest = true;
      localStorage.setItem('visited', true);
    }
    if (!validator.isEmail(userInfo.email)) {
      seterror('Invalid Email');
      return;
    }
    try {
      const { data } = await axiosinstance.post('auth/login', {
        userInfo,
        newGuest,
      });
      authContext.setAuthInfo(data);
      navigate('/dashboard');
    } catch (error) {
      seterror(error.response.data.message);
    }
    setloading(false);
  };
  return (
    <>
      {authContext.isAuthicated() && <Navigate to='/dashboard' replace />}
      <Box
        sx={{
          bgcolor: '#0A0A1B',
          backgroundImage: `url(${bgimage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          gap: {
            xs: 5,
            md: 7,
          },
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '1.5rem',
              md: '3rem',
            },
          }}
        >
          Login To Your <b style={{ color: colors.yellow }}>Account</b>
        </Typography>

        <LoginCard>
          <Box
            component={'form'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingY: 7,
              gap: 1,
              width: {
                md: '450px',
              },
            }}
            onSubmit={onSubmit}
          >
            {error && <Alert severity='error'>{error}</Alert>}
            <Typography
              color={'white'}
              sx={{ fontWeight: 'bold', alignSelf: 'flex-start' }}
              variant='h6'
            >
              Email
            </Typography>
            <TextField
              margin='normal'
              fullWidth
              id='email'
              name='email'
              autoFocus
              required
              onChange={(event) => seterror('')}
            />
            <Typography
              color={'white'}
              sx={{ fontWeight: 'bold', alignSelf: 'flex-start' }}
              variant='h6'
            >
              Password
            </Typography>
            <TextField
              margin='normal'
              fullWidth
              name='password'
              type='password'
              id='password'
              required
            />
            <LoginButton
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    bgcolor: '#040413',
                    borderRadius: '5px',
                    width: '70px',
                    height: '40px',
                    padding: '10px',
                  }}
                  color='primary'
                  loading={loading.toString()}
                />
              }
              color={'primary'}
              type='submit'
              variant='contained'
              loading={loading}
              loadingPosition='end'
            >
              <Typography>Login To Your Account</Typography>
            </LoginButton>
          </Box>
          {/* <IconsContainer>
            <LoginIcon>
              <AppleIcon fontSize='large' />
            </LoginIcon>
            <LoginIcon>
              <GoogleIcon fontSize='large' />
            </LoginIcon>
            <LoginIcon>
              <FacebookIcon fontSize='large' />
            </LoginIcon>
          </IconsContainer> */}
          <LoadingButton
            onClick={() => {
              onSubmit({
                currentTarget: {
                  email: {
                    value: 'Example@CodeClique.com',
                  },
                  password: {
                    value: 'SeniorDev',
                  },
                },
              });
            }}
            loading={loading}
          >
            continue as guest
          </LoadingButton>
        </LoginCard>
      </Box>
    </>
  );
}

export default Login;
