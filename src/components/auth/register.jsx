import React, { useRef } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import firebase from '../../util/firebase'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
}))
const Register = () => {
  const classes = useStyles()
  const style = { marginTop: '100px' }

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const registeration = () => {
    const usersRef = firebase.database().ref('users')

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      complete: false,
    }

    usersRef.push(user)

    nameRef.current.value = ''
    emailRef.current.value = ''
    passwordRef.current.value = ''
    confirmPasswordRef.current.value = ''
  }

  return (
    <div style={style}>
      <Container size="sm">
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card style={{ padding: '20px' }}>
              <form
                // ref={formRef}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField
                  inputRef={nameRef}
                  id="standard-basic"
                  label="Name"
                  type="text"
                />
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
                <TextField
                  inputRef={confirmPasswordRef}
                  id="standard-basic"
                  type="password"
                  label="Confirm Password"
                />
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: '42ch' }}
                  onClick={registeration}
                >
                  Register
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

export { Register }
