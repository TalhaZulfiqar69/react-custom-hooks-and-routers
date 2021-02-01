import React, { useRef, useState, useContext } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { AuthContext } from './PrivateRoutes'
import { credential } from 'firebase-admin'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
}))

const ChangePassword = () => {
  const { currentUser } = useContext(AuthContext)
  if (!currentUser) {
    return <Redirect to="/login" />
  }

  const classes = useStyles()
  const style = { marginTop: '100px' }

  const oldPasswordRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const [passwordError, setPasswordError] = useState()
  const [passwordSuccess, setPasswordSuccess] = useState()
  const history = useHistory()

  const reauthenticate = (oldPass) => {
    const user = firebase.auth().currentUser
    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPasswordRef.current.value
    )

    return user.reauthenticateWithCredential(credentials)
  }

  const resetPassword = () => {
    reauthenticate(oldPasswordRef.current.value)
      .then(() => {
        setPasswordError('')
        var user = firebase.auth().currentUser
        if (passwordRef.current.value != confirmPasswordRef.current.value) {
          setPasswordError('password and confirm password not matched')
          setTimeout(() => {
            setPasswordError('')
          }, 5000)
        } else {
          setPasswordError('')
          user
            .updatePassword(passwordRef.current.value)
            .then(() => {
              // Update successful.
              setPasswordSuccess('password changed succesfully')
              oldPasswordRef.current.value = ''
              passwordRef.current.value = ''
              confirmPasswordRef.current.value = ''
              setTimeout(() => {
                setPasswordSuccess('')
              }, 5000)
            })
            .catch(function (error) {
              // An error happened.
              console.log(error)
            })
        }
      })
      .catch((error) => {
        setPasswordError('Old password is incorrect')
        setTimeout(() => {
          setPasswordError('')
        }, 5000)
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
              {passwordSuccess && (
                <Alert severity="success">{passwordSuccess}</Alert>
              )}
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  inputRef={oldPasswordRef}
                  id="standard-basic"
                  label="Old Password"
                  type="password"
                />
                <TextField
                  inputRef={passwordRef}
                  id="standard-basic"
                  label="New Password"
                  type="password"
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
                  onClick={resetPassword}
                >
                  Update Password
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
export { ChangePassword }
