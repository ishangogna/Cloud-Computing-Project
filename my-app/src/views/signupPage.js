import * as React from 'react';
import {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../components/navbar';
import colab from '../utils/images/colab2.png'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth'
import { UserContext } from '../contexts/user'

function Copyright(props) {
 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/ishangogna/cloud-computing-project">
        ProjectMatcher
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const handleUser = (username, password, dispatchUser) => {
  dispatchUser({type : 'SET-USERNAME', payload : username })
}

const handleLogin = (username, password, dispatch) =>  {
  
  const body = {
    "username" : username,
    "password" : password,
    "email" : `${username}@email.com`,
    "interests" : []
}
const url = "https://74duznivyh.execute-api.us-east-1.amazonaws.com/prod/users"
fetch(url, {
    method : "POST",
    headers : {
        'content-type' : 'application/json',
    },
    body : JSON.stringify(body)
}).then(response => response.json())
.then(data => { console.log(data); alert("Account Created. Please return to login.") })
.catch(err => alert(err))

}

export default function SignUpSide() {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);
  const { current, dispatchUser } = useContext(UserContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleUser(data.get('username'), data.get('password'), dispatchUser)
    handleLogin(data.get('username'), data.get('password'), dispatch)
  };

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundImage: `url(${colab})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Create Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Create Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                <div style = {{ cursor : 'pointer', color : 'blue' }} onClick = {()=> navigate('/')}>Go back to Login Page.</div>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}