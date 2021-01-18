import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const Error = () => {
  const location = useLocation()
  return <div>{`Error 404 ${location.pathname}`}</div>
}
function App() {
  return (
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
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/user/chand">User</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user/:name" component={User} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  )
}

const Dashboard = () => {
  return <div>Dashboard </div>
}
const User = () => {
  const { name } = useParams()
  return <div>User {name}</div>
}
export default App
