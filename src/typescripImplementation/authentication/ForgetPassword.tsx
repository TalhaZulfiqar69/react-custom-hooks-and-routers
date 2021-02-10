import React, { useRef, useState } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { FORGET_PASSWORD } from './authentication_api'
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
    },
}))

const ForgetPassword: React.FC = () => {
    const classes = useStyles()
    const style = { marginTop: '100px' }

    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [emailInfo, setEmailInfo] = useState<string>('')

    const sendResetPasswordLink = async () => {
        const res = await FORGET_PASSWORD({ email })
        if (res) {
            setEmailInfo('')
            setEmailError(res)
        } else {
            setEmailError('')
            setEmailInfo('Password reset Link sended. Please check you mail box')
        }
    }
    return (
        <div style={style}>
            {/* <Container size="sm"> */}
            <Grid container spacing={3}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card style={{ padding: '20px' }}>
                        {emailInfo && <Alert severity="success">{emailInfo}</Alert>}
                        {emailError && <Alert severity="error">{emailError}</Alert>}
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                id="standard-basic"
                                label="Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                                variant="outlined"
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
            {/* </Container> */}
        </div>
    )
}

export { ForgetPassword }
