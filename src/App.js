import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar'
import AboutPage from './Pages/AboutPage'
import CommunityPage from "./Pages/CommunityPage"
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutPage/>}/>
        <Route path='/community' element={<CommunityPage/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
