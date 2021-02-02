  import React, { useRef, useState, useContext } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { AuthContext } from './PrivateRoutes'
import {LOGIN_USER} from './auth_api'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
}))
const LoginTypeScript: React.FC = () => {

  const classes = useStyles()
  const style = { marginTop: '100px' }
  const [passwordError, setPasswordError] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // const emailRef = useRef<HTMLInputElement | string>('')
  // const passwordRef = useRef<HTMLInputElement | string>('')
  const history = useHistory()

  const login = async () => {

    await LOGIN_USER({email ,password})
    history.push('/profile')

    // firebase
    //   .auth()
    //   // .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     setPasswordError('')
    //     var user = userCredential.user

    //     setEmail('')
    //     setPassword('')

    //     history.push('/profile')
    //   })
    //   .catch((error) => {
    //     setPasswordError('Email or password is incorrect')
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //   })
  }

  const { currentUser } = useContext(AuthContext)
  if (currentUser) {
    return <Redirect to="/profile" />
  }

  return (
    <div style={style}>
      {/* <Container size="sm"> */}
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Card style={{ padding: '20px' }}>
            {passwordError && <Alert severity="error">{passwordError}</Alert>}
            <form
              // ref={formRef}
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                // inputRef={emailRef}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                type="password"
                label="Password"
                // inputRef={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ width: '42ch' }}
                onClick={login}
              >
                Login
              </Button>
            </form>
            <Link to="/forget-password">Forget Password</Link>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      {/* </Container> */}
    </div>
  )
}

export { LoginTypeScript }
