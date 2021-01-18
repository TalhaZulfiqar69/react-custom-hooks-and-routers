import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useLocation,
  // useParams,
} from 'react-router-dom'

import { Header } from './components/header'
import { Profile } from './components/profile'
import { About } from './components/About'
function App() {
  return (
    <div>
      <Header />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          {/* <Route exact path="/" component={App} /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          {/* <Route path="/user/:name" component={User} /> */}
          {/* <Route path="*" component={Error} /> */}
        </Switch>
      </Router>
      {/* <Profile /> */}
    </div>
  )
}
export default App
