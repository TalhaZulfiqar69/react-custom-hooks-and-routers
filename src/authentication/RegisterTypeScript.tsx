import React, { useRef, useState } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
import { useHistory } from 'react-router-dom'
import {REGISTER_USER} from './auth_api'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
}))
const Register: React.FC = () => {
  const classes = useStyles()
  const style = { marginTop: '100px' }

  const [email, setEmai] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')
  const history = useHistory()

  const registeration = async () => {
    if (password !== confirmPassword) {
      return setPasswordError('Passowrd do not match')
    } else {
      const res = await REGISTER_USER({ email, password });
      history.push('/profile')
      // history.push('/register-step-2', { userId: user.uid })
    }
  }

  return (
    <div style={style}>
      {/* <Container size="sm"> */}
        <Grid container spacing={3}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Card style={{ padding: '20px' }}>
              {passwordError && <Alert severity="error">{passwordError}</Alert>}
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Email"
                  type="email"
                  onChange={(e) => setEmai(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  type="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                  id="standard-basic"
                  type="password"
                  label="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
      {/* </Container> */}
    </div>
  )
}

export { Register }
