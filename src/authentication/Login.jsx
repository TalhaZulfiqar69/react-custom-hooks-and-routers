import React, { useRef, useState } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
}))
const Login = () => {
  const classes = useStyles()
  const style = { marginTop: '100px' }

  const emailRef = useRef()
  const passwordRef = useRef()
  const [passwordError, setPasswordError] = useState()
  const history = useHistory()

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        setPasswordError('')
        var user = userCredential.user
        console.log('the user email after login', user.email)
        console.log('the user after login', user)
        emailRef.current.value = ''
        passwordRef.current.value = ''

        history.push('/dashboard', { email: user.email })
      })
      .catch((error) => {
        setPasswordError('Email or password is incorrect')
        const errorCode = error.code
        const errorMessage = error.message
      })
  }

  return (
    <div style={style}>
      <Container size="sm">
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
                  inputRef={emailRef}
                  id="standard-basic"
                  label="Email"
                  type="email"
                />
                <TextField
                  inputRef={passwordRef}
                  id="standard-basic"
                  type="password"
                  label="Password"
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
            </Card>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </div>
  )
}

export { Login }
