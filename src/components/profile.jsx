import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
  Chip,
} from '@material-ui/core'

import { AddEditGeneralInformation } from './subComponents/generalInformation'
import { Skills } from './subComponents/skills'
const Profile = () => {
  useEffect(() => {}, [])
  const [openGeneralInfoModal, setOpenGeneralInfoModal] = useState(false)
  const [openSkillsModal, setOpenSkillsModal] = useState(false)

  const handleGeneralInfoOpen = () => {
    setOpenGeneralInfoModal(true)
  }

  const handleGeneralInfoClose = () => {
    setOpenGeneralInfoModal(false)
  }

  const handleSkillsOpen = () => {
    setOpenSkillsModal(true)
  }

  const handleSkillsClose = () => {
    setOpenSkillsModal(false)
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  function createData(firstName, lastName, contactNumber, address) {
    return { firstName, lastName, address, contactNumber }
  }

  const generalInformation = localStorage.getItem('generalInfo')
  const gI = JSON.parse(generalInformation)

  const rows = [
    createData('Frozen', 'yoghurt', 'Lahore Pakistan', 2412342),
    createData('Ice cream', 'sandwich', 'Karachi Pakistan', 2412342),
    createData('Eclair', 'blohurt', 'Islamabad Pakistan', 2412342),
    createData('Ginger', 'Frozen', 'Gujrnwala Pakistan', 2412342),
    createData(gI.fName, gI.lName, gI.phone, gI.address),
  ]

  const classes = useStyles()

  const newArr = []
  const skillsArray = localStorage.getItem('skills')
  if (skillsArray) {
    const arr = skillsArray.split(',')

    arr.forEach((ele) => {
      const obj = {}
      obj.value = ele
      obj.name = ele
      newArr.push(obj)
    })
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <Container maxWidth="lg">
        <Button
          variant="contained"
          color="primary"
          className="float-right"
          onClick={handleGeneralInfoOpen}
        >
          Add New
        </Button>{' '}
        <br />
        <br />
        <TableContainer component={Paper} className="container-fluid">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Skills Level</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.firstName}>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>

                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.contactNumber}</TableCell>
                  <TableCell>
                    {newArr.length <= 4 ? (
                      <Chip
                        label="Junior"
                        style={{ backgroundColor: 'red', color: 'white' }}
                      />
                    ) : newArr.length <= 7 ? (
                      <Chip
                        label="Mediocer"
                        style={{ backgroundColor: 'yelow', color: 'white' }}
                      />
                    ) : (
                      <Chip
                        label="Expert"
                        style={{ backgroundColor: 'green', color: 'white' }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleGeneralInfoOpen}
                    >
                      Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSkillsOpen}
                    >
                      Skills
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      {openGeneralInfoModal && (
        <AddEditGeneralInformation
          open={openGeneralInfoModal}
          onClose={handleGeneralInfoClose}
          firstName={gI.fName}
          lastName={gI.lName}
          phone={gI.phone}
          address={gI.address}
        />
      )}

      {openSkillsModal && (
        <Skills
          open={openSkillsModal}
          onClose={handleSkillsClose}
          firstName={gI.fName}
          lastName={gI.lName}
          phone={gI.phone}
          address={gI.address}
        />
      )}
    </div>
  )
}

export { Profile }
