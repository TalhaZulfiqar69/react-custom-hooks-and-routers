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

import {
  Link,
  useLocation,
  // useParams,
  useHistory,
} from 'react-router-dom'
import { AddEditGeneralInformation } from './subComponents/generalInformation'
import profile from '../usersData'
const Profile = () => {
  useEffect(() => {}, [])

  const history = useHistory()
  const [openGeneralInfoModal, setOpenGeneralInfoModal] = useState(false)

  const handleGeneralInfoOpen = () => {
    setOpenGeneralInfoModal(true)
  }

  const handleGeneralInfoClose = () => {
    setOpenGeneralInfoModal(false)
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  const generalInformation = localStorage.getItem('generalInfo')
  const gI = JSON.parse(generalInformation)

  const classes = useStyles()

  return (
    <div>
      <br />
      <br />
      <br />
      <Container maxWidth="lg">
        <Button variant="contained" color="primary" className="float-right">
          <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>
            Add New
          </Link>
        </Button>{' '}
        <br />
        <br />
        <TableContainer component={Paper} className="container-fluid">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profile.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell>{row.designation}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => history.push('/edit', { row })}
                    >
                      Edit
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
    </div>
  )
}

export { Profile }
