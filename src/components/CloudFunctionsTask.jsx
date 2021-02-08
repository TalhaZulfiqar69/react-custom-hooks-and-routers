import React, { useRef } from 'react'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
    },
}))

const CloudFunctionTask = () => {
    const classes = useStyles()
    const style = { marginTop: '100px' }
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const userInfo = () => {
        const fName = firstNameRef.current.value
        const lName = lastNameRef.current.value
        axios
            .post(`http://localhost:5001/training-project-be1c1/us-central1/getFirstAndLastName`, { fName, lName })
            .then((res) => {
                console.log(res)
                console.log(res.data)
            })
        // console.log('firstNameRef', firstNameRef.current.value)
        // console.log('lastNameRef', lastNameRef.current.value)
    }
    return (
        <div style={style}>
            <Container size="sm">
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Card style={{ padding: '20px' }}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField inputRef={firstNameRef} id="standard-basic" label="First Name" type="text" />
                                <TextField inputRef={lastNameRef} id="standard-basic" type="text" label="Last Name" />
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    style={{ width: '45ch' }}
                                    onClick={userInfo}
                                >
                                    Submit
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

export { CloudFunctionTask }
