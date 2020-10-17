import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';
// import API from '../../utils/API';
// import zIndex from '@material-ui/core/styles/zIndex';
import { useHistory } from 'react-router-dom'
// import Ink from '../video/ink.mp4';
import { useUserContext } from '../firebase/userContext'

// import firebaseConfig from '../firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.nicepng.com/png/detail/4-45934_blue-smoke-effect-png-clip-art-stock.png)',
    backgroundSize: 'fill',
    // backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#BFE6FF",
    border: '1px solid black',
    borderRadius: 10
  },
  textfield: {
    borderRadius: 20
  }
}));



export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid component={Paper} square>
        <div className={classes.paper}>
        <img alt = "logo" src="images/collabcal.png" />
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          {/* <video autoPlay loop muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1"
            }}
           >
             <source src={Ink} type="video/mp4" />
           </video> */}
          <form className={classes.form} noValidate>
            <TextField 
              className={classes.textfield}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              margin="normal"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            </Box>
          </form>
          <h5>OR</h5>
          <section>
          <button
              className={classes.submit}
            >
              <SignIn />
            </button>
            {/* <SignOut /> */}
            </section>
        </div>
      </Grid>
    </Grid>
  );
}


// var user = firebase.auth().currentUser;


function SignIn() {
  const [user] = useUserContext()
  const history = useHistory()
  if (user) history.push("/calendar")
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider)
  }

//    auth.signInWithPopup(provider)
//   .then(user => {
//      try {
//        console.log(user)
//        let newUser = {displayname: user.user.displayName, email: user.user.email, uid: user.user.uid}
//        console.log(newUser)
//        API.createUser(newUser).then(results => {
//          console.log(results)})
       // const response = axios.post('/api/users', { email: user.user.uid });
        // console.log(':point_right: Returned data:', response);
  //    } 
  //    catch (e) {
 //       console.log(`:scream: Axios request failed: ${e}`);
 //     }
  //    // axios.post('/api/users', { email: user.user.uid })
      // console.log(user.user.uid)
 //     history.push("/calendar")})
  //  }
  return (
    <>
      <Button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</Button>
    </>
  )
}