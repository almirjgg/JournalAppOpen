import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Authlayout } from '../layout/Authlayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValiudations = {
  email: [value => value.includes('@'), 'El correo debe de tener un @'],
  password: [
    value => value.length >= 6,
    'El password debe de tener al menos 6 caracteres',
  ],
  displayName: [value => value.length >= 1, 'El nombre es obligatorio'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(state => state.auth);
  const isChecking = useMemo(() => status === 'checking', [status]);
  const [formSubmitted, setFormSubmitter] = useState(false);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isformValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValiudations);

  const onSubmit = event => {
    event.preventDefault();

    setFormSubmitter(true);

    if (!isformValid) return;
    dispatch(startCreatingUserWithEmailAndPassword(formState));
    console.log({ formState });
  };

  return (
    <Authlayout title='Crear Cuenta'>
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Name'
              type='name'
              variant='outlined'
              fullWidth
              name='displayName'
              onChange={onInputChange}
              value={displayName}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Email'
              type='email'
              variant='outlined'
              fullWidth
              name='email'
              onChange={onInputChange}
              value={email}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={isChecking}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} to='/auth/login' color='inherit'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </Authlayout>
  );
};
