import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { AddEditGeneralInformation } from './subComponents/generalInformation'
const GeneralInformation = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
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
          <Grid md={6}>
            <h4>General Information</h4>
          </Grid>
          <Grid md={6}>
            <Button
              variant="contained"
              color="primary"
              className="float-right"
              onClick={handleOpen}
            >
              Add New
            </Button>
          </Grid>
        </Grid>
      </Card>
      <TableContainer component={Paper} className="container-fluid">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddEditGeneralInformation openModal={openModal} handleClose={handleClose} />
    </div>
  )
}

export { GeneralInformation }
