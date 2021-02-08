import React, { useState, useContext } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, Link, Redirect } from 'react-router-dom'
import {RESET_PASSWORD} from './authentication_api'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '37ch',
    },
  },
}))

const ResetPassword: React.FC = () => {

    const classes = useStyles()
    const style = { marginTop: '100px' }
  
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setconfirmPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [passwordSuccess, setPasswordSuccess] = useState<string>('');
    
    const history = useHistory()

    const setNewPassword = async () => {

        if(password != confirmPassword) {
              setPasswordError("Password and confirm password not matched")
            } else {
              var url_string = window.location.search;
              const urlParams = new URLSearchParams(url_string);
              const oobCode = urlParams.get('oobCode');
            
            await RESET_PASSWORD({oobCode, password})
              setPasswordError("")
              setPasswordSuccess("Password updated successfully")
              setTimeout(() => {
                  history.push('/login')
              }, 5000)
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
                {passwordSuccess && (
                  <Alert severity="success">{passwordSuccess}</Alert>
                )}
                <form className={classes.root} noValidate autoComplete="off">
                
                  <TextField
                    id="standard-basic"
                    label="New Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    id="standard-basic"
                    type="password"
                    label="Confirm Password"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ width: '42ch' }}
                    onClick={setNewPassword}
                  >
                    Change Password
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

export {ResetPassword}
