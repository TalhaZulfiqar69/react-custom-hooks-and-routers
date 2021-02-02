import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React, { useContext } from 'react'
import { Header } from './components/header'
import {
  // BrowserRouter as Router,
  HashRouter as Router,
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
import { LoginTypeScript } from './authentication/LoginTypeScript'
import { Register } from './authentication/RegisterTypeScript'
// import { Register } from './authentication/Register'
import { Dashboard } from './authentication/dashboard'
import { RegistrationStep2 } from './authentication/RegistrationStep2'
import { userProfile } from './authentication/profile'
import { ForgetPassword } from './authentication/ForgerPassword'
import { ChangePassword } from './authentication/ChangePassword'
// import { PrivateRoutes } from './authentication/PrivateRoutes'
import { AuthProvider, AuthContext } from './authentication/PrivateRoutes'
import { UploadFile } from './components/UploadFile'
import { firebase } from './util/firebase'
function App() {
  const currentUser = useContext(AuthContext)

  // console.log('currentUser', currentUser)
  // if (!currentUser) {
  //   return <Redirect to="/login" />
  // }
  // alert(currentUser)
  console.log('firebase.auth()', firebase.auth().currentUser)
  console.log('huhuhuuhuhu currentUser', currentUser)
  return (
    <div>
      <AuthProvider>
        <Router>
          {/* {currentUser === 'undefined' ? <Header /> : ''} */}
          <Header />
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
            <Route path="/login" exact component={LoginTypeScript} />
            <Route path="/register" exact component={Register} />
            <Route path="/register-step-2" exact component={RegistrationStep2} />
            <Route path="/profile" exact component={userProfile} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/forget-password" exact component={ForgetPassword} />
            <Route path="/change-password" exact component={ChangePassword} />
            <Route path="/file-upload" exact component={UploadFile} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}
export default App
