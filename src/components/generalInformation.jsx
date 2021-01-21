import React, { useEffect, useState } from 'react'
import {
  Button,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogTitle,
  TextField,
  Container,
  Card,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useLocation } from 'react-router-dom'
import profile from '../usersData'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}))
const GeneralInformation = (props) => {
  const history = useHistory()
  const location = useLocation()
  const classes = useStyles()
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAdress] = useState('')

  const generalInformation = localStorage.getItem('generalInfo')
  const gI = JSON.parse(generalInformation)
  useEffect(() => {
    setName(props.firstName)
    setDesignation(props.lastName)
    setCompany(props.phone)
    setAdress(props.address)
  }, [props.firstName, props.lastName, props.phone, props.address])
  const saveGeneralInfo = () => {
    const generalInfo = {
      name,
      designation,
      company,
      address,
    }
    profile.push(generalInfo)
    history.push('/profile')
  }

  console.log('location', location.state.row.name)
  return (
    <div>
      {' '}
      <br />
      <br />
      <br />
      <br />
      <Container maxWidth="sm" align="center">
        <Card>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />{' '}
            <br />
            <TextField
              id="standard-basic"
              label="Designation"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
            />{' '}
            <br />
            <TextField
              id="standard-basic"
              label="Company"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />{' '}
            <br />
            <TextField
              id="standard-basic"
              label="Address"
              color="inherit"
              onChange={(e) => setAdress(e.target.value)}
              value={address}
            />{' '}
            <br />
            <br />
            <Button onClick={saveGeneralInfo} variant="contained" color="primary">
              Save
            </Button>
            <br />
          </form>
        </Card>
      </Container>
      {/* <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Add New User General Information'}
        </DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              label="First Name"
              onChange={(e) => setFName(e.target.value)}
              value={fName}
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              onChange={(e) => setLName(e.target.value)}
              value={lName}
            />
            <TextField
              id="standard-basic"
              label="Contact Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <TextField
              id="standard-basic"
              label="Address"
              onChange={(e) => setAdress(e.target.value)}
              value={address}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Close
          </Button>
          <Button onClick={saveGeneralInfo} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
  )
}
export { GeneralInformation }
