import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Table from '@material-ui/core/Table'
// import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button'
// import { Container } from '@material-ui/core/Container'

import { Button, Container } from '@material-ui/core'
import { AddEditGeneralInformation } from './subComponents/generalInformation'
import { Skills } from './subComponents/skills'

const Profile = () => {
  useEffect(() => {}, [])
  const [openGeneralInfoModal, setOpenGeneralInfoModal] = useState(false)
  // const [openEducationModal, setOpenEducationModal] = useState(false)
  const [openSkillsModal, setOpenSkillsModal] = useState(false)

  const handleGeneralInfoOpen = () => {
    setOpenGeneralInfoModal(true)
  }

  const handleGeneralInfoClose = () => {
    setOpenGeneralInfoModal(false)
  }

  // const handleEducationOpen = () => {
  //   setOpenEducationModal(true)
  // }
  // const handleEducationClose = () => {
  //   // getEducationInfo()
  //   setOpenEdu(false)
  // }
  const handleSkillOpen = () => {
    setOpenSkillsModal(true)
  }
  const handleSkillClose = () => {
    // getSkills()
    setOpenSkillsModal(false)
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  function createData(firstName, lastName, address, contactNumber) {
    return { firstName, lastName, address, contactNumber }
  }

  const rows = [
    createData('Frozen', 'yoghurt', 'Lahore Pakistan', 2412342),
    createData('Ice cream', 'sandwich', 'Karachi Pakistan', 2412342),
    createData('Eclair', 'blohurt', 'Islamabad Pakistan', 2412342),
    createData('Ginger', 'Frozen', 'Gujrnwala Pakistan', 2412342),
  ]

  const classes = useStyles()
  return (
    <div>
      <br />
      <br />
      <br />
      <Card className="container-fluid">
        <Grid container>
          {/* <Grid md={6}>
            <h4>General Information</h4>
          </Grid> */}
          <Grid md={12}>
            <Button
              variant="contained"
              color="primary"
              className="float-right"
              onClick={handleGeneralInfoOpen}
            >
              Add New
            </Button>

            <Button variant="contained" color="primary" onClick={handleSkillOpen}>
              Skills
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Container maxWidth="sm">
        <TableContainer component={Paper} className="container-fluid">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
            {rows.map((row) => (
              <TableRow key={row.firstName}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>

                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkillOpen}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
          </Table>
        </TableContainer>
      </Container>
      {openGeneralInfoModal && (
        <AddEditGeneralInformation
          openGeneralInfoModal={openGeneralInfoModal}
          handleGeneralInfoClose={handleGeneralInfoClose}
        />
      )}
      {openSkillsModal && (
        <Skills
          openSkillsModal={openSkillsModal}
          handleSkillClose={handleSkillClose}
        />
      )}
      {/* {openEducationModal && (
        <AddEditGeneralInformation
          openGeneralInfoModal={openGeneralInfoModal}
          handleGeneralInfoClose={handleGeneralInfoClose}
        />
      )} */}
    </div>
  )
}

export { Profile }
