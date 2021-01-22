import React from 'react'
import '../App.css'
import {
  Link,
  // useLocation,
  // useParams,
} from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
  const style = { color: 'white', textDecoration: 'none' }
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Link to="/" style={style}>
              Material UI
            </Link>
          </Typography>
          &nbsp;&nbsp;&nbsp;
          <Link to="/profile" style={style}>
            Profile
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/react-select" style={style}>
            React Select
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export { Header }
