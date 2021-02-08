import React, { useRef, useState, useContext, useEffect } from 'react'
import { Container, Card, Grid, TextField, Button, Avatar } from '@material-ui/core'
import { deepPurple, deepOrange } from '@material-ui/core/colors'
import Alert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { firebase } from '../util/firebase'
// import { useHistory, Link, Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '37ch',
        },
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
const UploadFile = () => {
    const classes = useStyles()
    const style = { marginTop: '100px' }
    const imageRef = useRef()
    const [imgUrl, setImageUrl] = useState()

    //   const { currentUser } = useContext(AuthContext)
    //   if (currentUser) {
    //     return <Redirect to="/profile" />
    //   }

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const fRef = firebase.storage().ref()
        const fileRef = fRef.child(file.name)
        await fileRef.put(file)
        const fileUrl = await fileRef.getDownloadURL()
        setImageUrl(fileUrl)
    }
    return (
        <div style={style}>
            <Container size="sm">
                <Grid container spacing={3}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Card style={{ padding: '20px' }}>
                            {/* {passwordError && <Alert severity="error">{passwordError}</Alert>} */}
                            <form
                                // ref={formRef}
                                className={classes.root}
                                noValidate
                                autoComplete="off"
                            >
                                <div className={classes.imgRoot}>
                                    <Avatar type="file" className={classes.orange} src={imgUrl}></Avatar>
                                </div>
                                <TextField
                                    inputRef={imageRef}
                                    id="standard-basic"
                                    label="Upload Image"
                                    type="file"
                                    onChange={uploadImage}
                                    src={imgUrl}
                                />
                            </form>
                        </Card>
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </Container>
        </div>
    )
}
export { UploadFile }
