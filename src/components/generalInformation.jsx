import React, { useEffect, useState, useRef } from 'react'
import { Button, TextField, Container, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
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
  const classes = useStyles()

  const nameRef = useRef('')
  const designationRef = useRef('')
  const companyRef = useRef('')
  const addressRef = useRef('')

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
    const id = Math.floor(Math.random(1, 15) * 5)
    const generalInfo = {
      id,
      name,
      designation,
      company,
      address,
    }
    profile.push(generalInfo)
    history.push('/profile')
  }
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
              inputRef={nameRef}
              id="name"
              label="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              error={name === ''}
              helperText={name === '' ? 'Name field is required' : ' '}
            />{' '}
            <br />
            <TextField
              inputRef={designationRef}
              id="designation"
              label="Designation"
              onChange={(e) => setDesignation(e.target.value)}
              value={designation}
              error={designation === ''}
              helperText={designation === '' ? 'Designation field is required' : ' '}
            />{' '}
            <br />
            <TextField
              inputRef={companyRef}
              id="company"
              label="Company"
              onChange={(e) => setCompany(e.target.value)}
              value={company}
              error={company === ''}
              helperText={company === '' ? 'Company field is required' : ' '}
            />{' '}
            <br />
            <TextField
              inputRef={addressRef}
              id="address"
              label="Address"
              color="inherit"
              onChange={(e) => setAdress(e.target.value)}
              value={address}
              error={address === ''}
              helperText={address === '' ? 'Address field is required' : ' '}
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
    </div>
  )
}
export { GeneralInformation }
