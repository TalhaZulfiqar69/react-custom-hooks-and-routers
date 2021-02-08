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
const Login = () => {
  const classes = useStyles()
  const style = { marginTop: '100px' }
  const emailRef = useRef()
  const passwordRef = useRef()
  const login = () => {
    firebase.database.ref('users').orderByKey().limitToLast(100)
    firebase.database.ref('users').push(emailRef.current.value)
    firebase.database.ref('users').push(passwordRef.current.value)
  }
  return (
    <div style={style}>
      <Container size="sm">
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card style={{ padding: '20px' }}>
              <form className={classes.root} noValidate autoComplete="off">
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
                  size="small"
                  style={{ width: '45ch' }}
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
