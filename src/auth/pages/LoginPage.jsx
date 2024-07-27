import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Authlayout } from '../layout/Authlayout';

export const LoginPage = () => {
  return (
    <Authlayout title='Login'>
      <form>
        <Grid container>
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
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth>
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
