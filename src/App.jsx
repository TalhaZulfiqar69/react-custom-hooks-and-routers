import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { Header } from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  // useParams,
} from 'react-router-dom'
import { Profile } from './components/profile'
import { About } from './components/About'
import { GeneralInformation } from './components/generalInformation'
import { EditGeneralInformation } from './components/editGeneralInformation'
import { ReactSelect } from './components/reactSelect'
import { ReactTableExample } from './components/reactTableExample'
import { EditUser } from './components/editUser'
// import { Login } from './components/auth/login'
// import { Register } from './components/auth/register'
import { Login } from './authentication/Login'
import { Register } from './authentication/Register'
import { Dashboard } from './authentication/dashboard'
function App() {
  // const location = useLocation()
  // console.log('user shshhs', location.state.user)
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile" exact component={Profile} />
          <Route path="/about" exact component={About} />
          <Route path="/add" exact component={GeneralInformation} />
          <Route path="/edit" exact component={EditGeneralInformation} />
          <Route path="/react-select" exact component={ReactSelect} />
          <Route path="/react-table" exact component={ReactTableExample} />
          <Route path="/edit-user" exact component={EditUser} />
          {/* <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} /> */}
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
