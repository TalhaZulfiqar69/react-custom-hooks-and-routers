import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  // Modal,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  // TextField,
} from '@material-ui/core'
import { IndeterminateCheckBoxRounded } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100ch',
    },
  },

  Checkboxroot: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  editIcon: {
    cursor: 'pointer',
  },
  begeinner: {
    color: 'white',
    backgroundColor: 'blue',
  },
  mediocar: {
    color: 'white',
    backgroundColor: 'yellow',
  },
  experts: {
    color: 'white',
    backgroundColor: 'green',
  },
}))
const skillData = [
  { id: 0, name: 'php' },
  { id: 1, name: 'css' },
  { id: 2, name: 'html' },
  { id: 3, name: 'javascript' },
  { id: 4, name: 'reactjs' },
  { id: 5, name: 'nodejs' },
  { id: 6, name: 'sass' },
  { id: 7, name: 'postgres' },
  { id: 8, name: 'laravel' },
  { id: 9, name: 'scss' },
]

const Skills = (props) => {
  // const styles = useStyle()
  const [isChecked, setIsChecked] = useState([])

  const handleSingleCheck = (e) => {
    const { name } = e.target
    if (isChecked.includes(name)) {
      setIsChecked(isChecked.filter((checked_name) => checked_name !== name))
      return
    }
    isChecked.push(name)
    setIsChecked([...isChecked])
  }
  const handleSubmit = () => {
    const skillsInfo = { isChecked }
    localStorage.setItem('skills', JSON.stringify(skillsInfo))
    props.onClose()
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Skills'}</DialogTitle>
        <DialogContent>
          <FormControl component="fieldset">
            <FormGroup>
              {skillData.map((skill, index) => (
                // eslint-disable-next-line react/jsx-key
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked.includes(skill.name)}
                      onChange={handleSingleCheck}
                      name={skill.name}
                    />
                  }
                  label={skill.name}
                />
              ))}
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary" className="float-left">
            Close
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export { Skills }
