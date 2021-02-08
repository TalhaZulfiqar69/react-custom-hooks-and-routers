import React, { useRef, useState, useContext } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
import { useHistory, Link, Redirect } from 'react-router-dom'
// import { AuthContext } from './PrivateRoutes'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
    },
}))

const ResetPassword = () => {
    const classes = useStyles()
    const style = { marginTop: '100px' }

    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const [passwordError, setPasswordError] = useState()
    const [passwordSuccess, setPasswordSuccess] = useState()
    const history = useHistory()

    const setNewPassword = async () => {
        try {
            if (passwordRef.current.value != confirmPasswordRef.current.value) {
                setPasswordError('Password and confirm password not matched')
            }
            {
                var url_string = window.location.search
                const urlParams = new URLSearchParams(url_string)
                const oobCode = urlParams.get('oobCode')

                await firebase.auth().confirmPasswordReset(oobCode, passwordRef.current.value)
                setPasswordError('')
                setPasswordSuccess('Password updated successfully')
                setTimeout(() => {
                    history.push('/login')
                }, 5000)
            }
        } catch (error) {}
    }
    return (
        <div style={style}>
            <Container size="sm">
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Card style={{ padding: '20px' }}>
                            {passwordError && <Alert severity="error">{passwordError}</Alert>}
                            {passwordSuccess && <Alert severity="success">{passwordSuccess}</Alert>}
                            <form className={classes.root} noValidate autoComplete="off">
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
                                    onClick={setNewPassword}
                                >
                                    Change Password
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
export { ResetPassword }
