import React, { useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))
const AddEditGeneralInformation = (props) => {
  const classes = useStyles()
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAdress] = useState('')

  const generalInformation = localStorage.getItem('generalInfo')
  const gI = JSON.parse(generalInformation)
  useEffect(() => {
    setFName(props.firstName)
    setLName(props.lastName)
    setPhone(props.phone)
    setAdress(props.address)
  }, [props.firstName, props.lastName, props.phone, props.address])
  const saveGeneralInfo = () => {
    const generalInfo = {
      fName,
      lName,
      phone,
      address,
    }
    // const gIArray = []
    // localStorage.setItem('generalInfo', JSON.stringify(gIArray.push(generalInfo)))
    localStorage.setItem('generalInfo', JSON.stringify(generalInfo))
    setFName('')
    setLName('')
    setPhone('')
    setAdress('')
    props.onClose(false)
  }

  return (
    <div>
      <Dialog
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
      </Dialog>
    </div>
  )
}
export { AddEditGeneralInformation }
