import './App.css';
import Navbar from './components/navbar';
import LandingPage from './views/landingPage';
import SignInSide from './views/signInPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FindPage from './views/findPage';
import ResultsPage from './views/resultsPage';

import { useContext } from 'react'
import { AuthContext } from './contexts/auth';
import LoggedInPage from './views/loggedInPage';

function ActualApp() {
  const { user } = useContext(AuthContext) 
  console.log(user)
  return (
      <div className="App">
          {/* <Navbar />
          <SignInSide /> */}
        <Router>
        <div className="App">
          <Routes>
              {
                  user.isAuthenticated === false ? <Route exact path = "/" element = {<SignInSide/>} /> 
                  : <Route exact path = "/" element = {<LoggedInPage/>} />
              }
            
            {/* <Route path = "/signin" element = {<SignInSide/>}/> */}
            <Route path = "/find" element = {<FindPage/>}/>
            <Route path = "/results" element = {<ResultsPage/>}/>
          </Routes>
        </div>
      </Router>
      </div>
  );
}

export default ActualApp;
