import React, { useEffect, useRef, useState, useContext } from 'react'

import { useLocation, useHistory, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { connect } from 'react-redux'
import { firebase, db, firebaseConfig } from '../../util/firebase'
import { AuthContext } from '../../authentication/PrivateRoutes'
import { GET_USER_INFORMATION } from './authentication_api'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Actions/LoginAction'
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
    bottom: {
        marginBottom: 50,
    },
}))

const Profile: React.FC = (props: any) => {
    console.log('props in profile', props.userData.login.email)
    console.log('props in profile', props)
    const { currentUser } = useContext(AuthContext)
    if (!currentUser) {
        return <Redirect to="/login" />
    }

    const dispatch = useDispatch()
    const classes = useStyles()
    const location = useLocation()
    const history = useHistory()
    const [data, setData] = useState<any>()

    useEffect(() => {
        userData()
    }, [])

    const userData = async () => {
        var loginedUser = firebase.auth().currentUser
        if (loginedUser) {
            const userId = loginedUser.uid
            const ddd = await GET_USER_INFORMATION({ userId })
            console.log('the ddd', ddd)
            ddd.forEach(function (doc: { data: () => any }) {
                const dataItems = []
                const myData = doc.data()
                dataItems.push(myData)
                setData(dataItems)
            })
        }
    }

    const logoutUser = () => {
        // dispatch()
        const userData = {
            email: '',
            password: '',
        }
        firebase.auth().signOut()
        history.push('/login')
        props.logoutHandler(dispatch(logout(userData)))
    }

    return (
        <div className={classes.top}>
            {/* <Container size="sm"> */}
            <Grid container spacing={3}>
                <Grid item xs={10}>
                    <Card style={{ padding: '20px' }}>
                        <Button variant="contained" color="primary" className={classes.bottom} onClick={logoutUser}>
                            Logout
                        </Button>
                        <h5>Welcome: </h5> {props.userData.login.email}
                        {/* <h6>{firebase.auth().currentUser.email}</h6> */}
                        {data &&
                            data.map((d: any) => (
                                // eslint-disable-next-line react/jsx-key
                                <p>
                                    <img src={d.profilePicture} alt="" />
                                    <br />
                                    <br />
                                    {d.address} <br />
                                    <br /> {d.company}
                                    <br />
                                    <br /> {d.designation}
                                    <br />
                                    <br /> {d.qualification}
                                    <br />
                                    <br /> {d.mobileNumber}
                                </p>
                            ))}
                    </Card>
                </Grid>
            </Grid>
            {/* </Container> */}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        userData: state.auth,
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    logoutHandler: (data: any) => dispatch(logout(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
// export { Profile }
