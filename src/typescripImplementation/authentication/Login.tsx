import React, { useState, useContext } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { AuthContext } from '../../authentication/PrivateRoutes'
import {LOGIN_USER} from '../authentication/authentication_api'
import { firebase } from '../../util/firebase'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '37ch',
      },
    },
    signupLink: {
      marginLeft: 160
    }
  }))

const Login: React.FC = () => {

    const { currentUser } = useContext(AuthContext)
    if (currentUser) {
        return <Redirect to="/profile" />
    }

    const classes = useStyles()
    const style = { marginTop: '100px' }
    const [passwordError, setPasswordError] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const history = useHistory()

    const login = async () => {
        const res = await LOGIN_USER({email ,password})    
        const user = firebase.auth().currentUser;
        if(user){
            setPasswordError("")
            history.push('/profile')
        } else {
            setPasswordError(res)
            }
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
              className={classes.root}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                type="password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="outlined"
                color="primary"
                style={{ width: '42ch' }}
                onClick={login}
              >
                Login
              </Button>
            </form>
            <br/>
            <Link to="/forget-password">Forget Password</Link>
            <Link to="/forget-password" className={classes.signupLink}>Signup</Link>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      </Container>
    </div>
    )
}
export {Login}
