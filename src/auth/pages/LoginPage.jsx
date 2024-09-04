import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Authlayout } from '../layout/Authlayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
} from '../../store/auth';
import { useForm } from '../../hooks';

export const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'almirjgg@gmail.com',
    password: '123456',
  });
  const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
  const onSubmit = event => {
    event.preventDefault();
    // dispatch(checkingAuthentication(email, password));
    dispatch(startLoginWithEmailAndPassword({ email, password }));
    console.log({ email, password });
  };

  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn');
    dispatch(startGoogleSignIn());
  };
  return (
    <Authlayout title='Login'>
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Email'
              type='email'
              variant='outlined'
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='password'
              type='password'
              variant='outlined'
              fullWidth
              name='password'
              onChange={onInputChange}
              value={password}
            />
          </Grid>
          <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                variant='contained'
                fullWidth
                type='submit'
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                variant='contained'
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link
              component={RouterLink}
              to='/auth/register'
              color='inherit'
              sx={{ mt: 1 }}
            >
              New Account
            </Link>
          </Grid>
        </Grid>
      </form>
    </Authlayout>
  );
};
