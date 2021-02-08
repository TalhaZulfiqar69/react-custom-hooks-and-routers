import React, { useState } from 'react'

import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Grid, TextField, Button, Avatar } from '@material-ui/core'
import { deepPurple, deepOrange } from '@material-ui/core/colors'
import { Alert } from '@material-ui/lab'
import { REGISTER_USER_SECOND_STEP } from './authentication_api'
import { firebase, db } from '../../util/firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
    },
    top: {
        marginTop: 100,
    },
    imgRoot: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(2),
            position: 'relative',
            height: 130,
            width: 130,
            marginLeft: 100,
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
}))

const RegistrationSetpTwo: React.FC = () => {
    const classes = useStyles()
    const location = useLocation()
    const history = useHistory()
    const [error, setError] = useState<string>('')
    const [mobileNumber, setMobileNumber] = useState<string>('')
    const [qualification, setQualification] = useState<string>('')
    const [designation, setDesignation] = useState<string>('')
    const [company, setCompany] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [imgUrl, setImgUrl] = useState<string>('')

    const saveUserInformation = async () => {
        if (mobileNumber.length <= 0) {
            setError('mobileNumber is requried')
        } else if (qualification.length <= 0) {
            setError('qualification is requried')
        } else if (designation.length <= 0) {
            setError('designation is requried')
        } else if (company.length <= 0) {
            setError('company is requried')
        } else if (address.length <= 0) {
            setError('address is requried')
        } else {
            setError('')
            const user = firebase.auth().currentUser
            const UID = user?.uid
            const res = await REGISTER_USER_SECOND_STEP({
                mobileNumber,
                qualification,
                designation,
                company,
                address,
                imgUrl,
                UID,
            })
            history.push('/profile')
        }
    }

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const fRef = firebase.storage().ref()
        const fileRef = fRef.child(file.name)
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()

        setImgUrl(fileUrl)
    }

    return (
        <div className={classes.top}>
            <Container size="sm">
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Card style={{ padding: '20px' }}>
                            {error && <Alert severity="error">{error}</Alert>}
                            <form className={classes.root} noValidate autoComplete="off">
                                <div className={classes.imgRoot}>
                                    <Avatar type="file" className={classes.orange} src={imgUrl}></Avatar>
                                </div>

                                <h1>Hello world of second Step</h1>
                                {!imgUrl && (
                                    <TextField
                                        id="standard-basic"
                                        label="Upload Image"
                                        type="file"
                                        onChange={uploadImage}
                                    />
                                )}
                                <TextField
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    id="standard-basic"
                                    label="Mobile No"
                                    type="number"
                                />
                                <TextField
                                    onChange={(e) => setQualification(e.target.value)}
                                    id="standard-basic"
                                    type="text"
                                    label="Qualification"
                                />
                                <TextField
                                    onChange={(e) => setDesignation(e.target.value)}
                                    id="standard-basic"
                                    type="text"
                                    label="Designation"
                                />
                                <TextField
                                    onChange={(e) => setCompany(e.target.value)}
                                    id="standard-basic"
                                    type="text"
                                    label="Company"
                                />
                                <TextField
                                    onChange={(e) => setAddress(e.target.value)}
                                    id="standard-basic"
                                    type="text"
                                    label="Address"
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ width: '42ch' }}
                                    onClick={saveUserInformation}
                                >
                                    Finish Register
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
export { RegistrationSetpTwo }
