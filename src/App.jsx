import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { Header } from './components/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useLocation,
  // useParams,
} from 'react-router-dom'
import { Profile } from './components/profile'
import { About } from './components/About'
import { GeneralInformation } from './components/generalInformation'
import { EditGeneralInformation } from './components/editGeneralInformation'
import { ReactSelect } from './components/reactSelect'
import { ReactTableExample } from './components/reactTableExample'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/add" exact component={GeneralInformation} />
          <Route path="/edit" exact component={EditGeneralInformation} />
          <Route path="/react-select" exact component={ReactSelect} />
          <Route path="/react-table" exact component={ReactTableExample} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
