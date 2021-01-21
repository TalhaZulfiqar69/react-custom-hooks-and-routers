import React from 'react'
import '../App.css'
import {
  Link,
  // useLocation,
  // useParams,
} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'

const Header = () => {
  const style = { color: 'white', textDecoration: 'none' }
  //   const navbarStyle = { marginBottom: '30px' }
  return (
    <div>
      {/* <Router style={{ marginBottom: '30px' }}> */}
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
          <Link to="/about" style={style}>
            About
          </Link>
        </Toolbar>
      </AppBar>

      {/* <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
        </Switch> */}
      {/* </Router> */}
    </div>
  )
}
export { Header }
