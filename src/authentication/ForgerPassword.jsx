import React, { useRef, useState } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
    },
}))
const ForgetPassword = () => {
    const classes = useStyles()
    const style = { marginTop: '100px' }

    const emailRef = useRef()
    const [emailError, setEmailError] = useState()
    const [emailInfo, setEmailInfo] = useState()

    const sendResetPasswordLink = () => {
        var auth = firebase.auth()
        auth.sendPasswordResetEmail(emailRef.current.value)
            .then((res) => {
                setEmailError('')
                setEmailInfo('Email sended. Please check you mail box')
            })
            .catch(function (error) {
                setEmailInfo('')
                setEmailError('User with this email is not existed')
                // An error happened.
            })
    }

    return (
        <div style={style}>
            <Container size="sm">
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Card style={{ padding: '20px' }}>
                            {emailInfo && <Alert severity="success">{emailInfo}</Alert>}
                            {emailError && <Alert severity="error">{emailError}</Alert>}
                            <form
                                // ref={formRef}
                                className={classes.root}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField inputRef={emailRef} id="standard-basic" label="Email" type="email" />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ width: '42ch' }}
                                    onClick={sendResetPasswordLink}
                                >
                                    Send Reset Password Link
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

export { ForgetPassword }
