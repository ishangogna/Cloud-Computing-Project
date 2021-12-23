import './App.css';
import Navbar from './components/navbar';
import LandingPage from './views/landingPage';
import SignInSide from './views/signInPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FindPage from './views/findPage';
import ResultsPage from './views/resultsPage';
import AuthContextProvider, {AuthContext} from './contexts/auth'
import { useContext } from 'react'
import ActualApp from './actualApp';

function App() {

  return (
    <AuthContextProvider>
      <ActualApp/>
    </AuthContextProvider>
  );
}

export default App;
