import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Authlayout } from '../layout/Authlayout';

export const RegisterPage = () => {
  return (
    <Authlayout title='Crear Cuenta'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField label='Name' type='name' variant='outlined' fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Email'
              type='email'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='password'
              type='password'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth>
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
