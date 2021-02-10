import React, { useState } from 'react'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { REGISTER_USER } from './authentication_api'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
    },
}))
const Registration: React.FC = () => {
    const classes = useStyles()
    const style = { marginTop: '100px' }

    const [email, setEmai] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')
    const history = useHistory()

    const registration = async () => {
        if (password !== confirmPassword) {
            setPasswordError('Password and confirm password not matched')
        } else if (password.length < 6) {
            setPasswordError('Minimum password lenght must be 6')
        } else {
            await REGISTER_USER({ email, password })
            history.push('/register-step-two')
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
                            <Button variant="outlined" color="primary" style={{ width: '42ch' }} onClick={registration}>
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

export { Registration }
