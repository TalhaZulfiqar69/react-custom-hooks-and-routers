import React, { useRef, useState } from 'react'

import { useHistory, useLocation } from 'react-router-dom'
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

const RegistrationStep2 = () => {
  const classes = useStyles()
  const location = useLocation()
  const history = useHistory()
  const [error, setError] = useState()
  const mobileNumberRef = useRef()
  const qualificationRef = useRef()
  const designationRef = useRef()
  const companyRef = useRef()
  const addressRef = useRef()

  const saveUserInformation = () => {
    if (mobileNumberRef.current.value.length <= 0) {
      setError('mobileNumber is requried')
    } else if (qualificationRef.current.value.length <= 0) {
      setError('qualification is requried')
    } else if (designationRef.current.value.length <= 0) {
      setError('designation is requried')
    } else if (companyRef.current.value.length <= 0) {
      setError('company is requried')
    } else if (addressRef.current.value.length <= 0) {
      setError('address is requried')
    } else {
      setError('')

      db.collection('userDetails')
        .add({
          mobileNumber: mobileNumberRef.current.value,
          qualification: qualificationRef.current.value,
          designation: designationRef.current.value,
          company: companyRef.current.value,
          address: addressRef.current.value,
          userId: location.state.userId,
        })
        .then(function (docRef) {
          // console.log('Document written with ID: ', docRef.id)
          // console.log('Document written: ', docRef)
          const userData = docRef
          mobileNumberRef.current.value = ''
          qualificationRef.current.value = ''
          designationRef.current.value = ''
          companyRef.current.value = ''
          addressRef.current.value = ''
          history.push('/profile')
          // history.push('/register-step-2', { userId: user.uid })
        })
        .catch(function (e) {
          setError(e)
        })
    }
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
                <TextField
                  inputRef={mobileNumberRef}
                  id="standard-basic"
                  label="Mobile No"
                  type="number"
                />
                <TextField
                  inputRef={qualificationRef}
                  id="standard-basic"
                  type="text"
                  label="Qualification"
                />
                <TextField
                  inputRef={designationRef}
                  id="standard-basic"
                  type="text"
                  label="Designation"
                />
                <TextField
                  inputRef={companyRef}
                  id="standard-basic"
                  type="text"
                  label="Company"
                />
                <TextField
                  inputRef={addressRef}
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

export { RegistrationStep2 }
