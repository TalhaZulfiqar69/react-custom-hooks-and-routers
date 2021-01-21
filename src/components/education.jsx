import React from 'react'
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
const Education = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  })

  function createData(metric, intermediate, bacholer, university) {
    return { metric, intermediate, bacholer, university }
  }

  const rows = [
    createData('Frozen', 'yoghurt', 'Lahore Pakistan', 2412342),
    createData('Ice cream', 'sandwich', 'Karachi Pakistan', 2412342),
    createData('Eclair', 'blohurt', 'Islamabad Pakistan', 2412342),
    createData('Ginger', 'Frozen', 'Gujrnwala Pakistan', 2412342),
  ]

  const addNewEducation = () => {
    alert('hello world education')
  }
  const classes = useStyles()

  return (
    <div>
      <br />
      <br />
      <br />

      <Card className="container-fluid">
        <Grid container>
          <Grid md={6}>
            <h4>Educational Information</h4>
          </Grid>
          <Grid md={6}>
            <Button
              variant="contained"
              color="primary"
              className="float-right"
              onClick={addNewEducation}
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
              <TableCell>Metric</TableCell>
              <TableCell>Intermediate</TableCell>
              <TableCell>Bacholer</TableCell>
              <TableCell>University</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.metric}>
                <TableCell component="th" scope="row">
                  {row.metric}
                </TableCell>

                <TableCell>{row.intermediate}</TableCell>
                <TableCell>{row.bacholer}</TableCell>
                <TableCell>{row.university}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* </Card> */}
    </div>
  )
}

export { Education }
