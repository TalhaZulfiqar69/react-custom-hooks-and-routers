import React, { useEffect, useRef, useState } from 'react'

import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, Grid, TextField, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { firebase, db } from '../util/firebase'

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
}))

const userProfile = () => {
  const classes = useStyles()
  const location = useLocation()
  const [data, setData] = useState()

  useEffect(() => {
    var loginedUser = firebase.auth().currentUser
    // console.log('loginedUser', firebase.auth().currentUser.email)
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

    // var userss = firebase.auth().currentUser
    // console.log('Current User', userss)
  }, [])

  return (
    <div className={classes.top}>
      <Container size="sm">
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Card style={{ padding: '20px' }}>
              <h5>Welcome:</h5>
              <h6>{firebase.auth().currentUser.email}</h6>
              {data &&
                data.map((d) => (
                  // eslint-disable-next-line react/jsx-key
                  <p>
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
