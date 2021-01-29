import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { useContext } from 'react'
import { Header } from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  // useParams,
} from 'react-router-dom'
// import { Profile } from './components/profile'
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
import { RegistrationStep2 } from './authentication/RegistrationStep2'
import { userProfile } from './authentication/profile'
import { ForgetPassword } from './authentication/ForgerPassword'
// import { PrivateRoutes } from './authentication/PrivateRoutes'
import { AuthProvider } from './authentication/PrivateRoutes'
import { UploadFile } from './components/UploadFile'

import { AuthContext } from './authentication/PrivateRoutes'
import { firebase } from './util/firebase'
function App() {
  const currentUser = useContext(AuthContext)

  // console.log('currentUser', currentUser)
  // if (!currentUser) {
  //   return <Redirect to="/login" />
  // }
  // alert(currentUser)
  return (
    <div>
      <AuthProvider>
        <Router>
          {currentUser === 'undefined' ? <Header /> : ''}
          <Switch>
            {/* <Route path="/profile" exact component={Profile} /> */}
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
            <Route path="/register-step-2" exact component={RegistrationStep2} />
            <Route path="/profile" exact component={userProfile} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/forget-password" exact component={ForgetPassword} />
            <Route path="/file-upload" exact component={UploadFile} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}
export default App
