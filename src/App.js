import logo from './logo.svg';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import './App.css';
import LandingComponent from './Components/LandingComponent';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingComponent />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/not-found" element={<NotFound/>}/>
      <Route path="*"  element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
