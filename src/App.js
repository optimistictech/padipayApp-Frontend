import './App.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
// import Navbar from './Components/Navbar';
import AboutPage from './Pages/AboutusPage';
import CommunityPage from './Pages/CommunityPage';
// import Footer from './Components/Footer';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
// import PadiLogo from './Components/PadiLogo';


function App() {
  return (
    <BrowserRouter>
      {/* <PadiLogo /> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path='/aboutus' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/community' element={<CommunityPage/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
