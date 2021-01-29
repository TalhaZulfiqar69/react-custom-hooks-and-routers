import React, { useEffect, useRef, useState, useContext } from 'react'

import { useLocation, useHistory, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { firebase, db, firebaseConfig } from '../util/firebase'
import { AuthContext } from './PrivateRoutes'

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

const userProfile = () => {
  const { currentUser } = useContext(AuthContext)
  if (!currentUser) {
    return <Redirect to="/login" />
  }
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()
  const [data, setData] = useState()

  useEffect(() => {
    var loginedUser = firebase.auth().currentUser

    if (loginedUser) {
      db.collection('userDetails')
        .where('userId', '==', loginedUser.uid)
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            const dataItems = []
            const myData = doc.data()
            dataItems.push(myData)
            setData(dataItems)
          })
        })
        .catch(function (error) {
          console.log('Error getting documents: ', error)
        })
    }
  }, [])

  const logoutUser = () => {
    firebase.auth().signOut()
    history.push('/login')
  }
  return (
    <div className={classes.top}>
      <Container size="sm">
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Card style={{ padding: '20px' }}>
              <Button
                variant="contained"
                color="primary"
                className={classes.bottom}
                onClick={logoutUser}
              >
                Logout
              </Button>
              <h5>Welcome:</h5>
              <h6>{firebase.auth().currentUser.email}</h6>
              {data &&
                data.map((d) => (
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
      </Container>
    </div>
  )
}

export { userProfile }
