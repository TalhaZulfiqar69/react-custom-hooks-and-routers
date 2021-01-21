import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Modal,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from '@material-ui/core'
function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 10 + rand()
  const left = 15 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
  }
}

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

const Skills = (props) => {
  const classes = useStyles()
  // const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)

  const [state, setState] = useState({
    laravel: false,
    vue: false,
    react: false,
    node: false,
    angular: false,
    css: false,
    html: false,
    redis: false,
    mongoDb: false,
    postman: false,
  })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const {
    laravel,
    vue,
    react,
    node,
    angular,
    css,
    html,
    redis,
    mongoDb,
    postman,
  } = state
  const success =
    [laravel, vue, react, node, angular, css, html, redis, mongoDb, postman].filter(
      (v) => v
    ).length !== 2

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Skills</h4>

      <FormControl
        component="fieldset"
        className={classes.formControl}
        error={success}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={laravel} onChange={handleChange} name="laravel" />
            }
            label="Laravel"
          />
          <FormControlLabel
            control={<Checkbox checked={vue} onChange={handleChange} name="vue" />}
            label="Vue"
          />
          <FormControlLabel
            control={
              <Checkbox checked={react} onChange={handleChange} name="react" />
            }
            label="React"
          />

          <FormControlLabel
            control={<Checkbox checked={node} onChange={handleChange} name="node" />}
            label="Node"
          />

          <FormControlLabel
            control={
              <Checkbox checked={angular} onChange={handleChange} name="angular" />
            }
            label="Angular"
          />

          <FormControlLabel
            control={<Checkbox checked={css} onChange={handleChange} name="css" />}
            label="Css"
          />

          <FormControlLabel
            control={<Checkbox checked={html} onChange={handleChange} name="html" />}
            label="Html"
          />

          <FormControlLabel
            control={
              <Checkbox checked={redis} onChange={handleChange} name="redis" />
            }
            label="Redis"
          />

          <FormControlLabel
            control={
              <Checkbox checked={mongoDb} onChange={handleChange} name="mongoDb" />
            }
            label="MongoDb"
          />

          <FormControlLabel
            control={
              <Checkbox checked={postman} onChange={handleChange} name="postman" />
            }
            label="Postman"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  )

  return (
    <div>
      <Modal
        // eslint-disable-next-line react/prop-types
        open={props.openSkillsModal}
        // eslint-disable-next-line react/prop-types
        onClose={props.handleSkillClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export { Skills }
