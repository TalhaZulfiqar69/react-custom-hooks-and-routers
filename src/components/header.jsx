import React from 'react'
import '../App.css'
import {
  Link,
  // useLocation,
  // useParams,
} from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
const Header = () => {
  const classes = useStyles()
  const style = { color: 'white', textDecoration: 'none' }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link to="/" style={style}>
              Material UI
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/profile" style={style}>
              Profile
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/react-select" style={style}>
              React Select
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/react-table" style={style}>
              React Table
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/login" style={style}>
              Login
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/register" style={style}>
              Register
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export { Header }
