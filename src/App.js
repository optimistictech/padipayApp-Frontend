import './App.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
// import Navbar from './Components/Navbar';
import AboutPage from './Pages/AboutusPage';
import CommunityPage from './Pages/CommunityPage';
// import Footer from './Components/Footer';
import SignupPage from './Pages/SignupPage';
// import PadiLogo from './Components/PadiLogo';
import LendersBorrowers from './Pages/LendersBorrowers'
import LoginPage from './Pages/LoginPage';
import contactus from './Pages/ContactUs'
import terms from './Pages/TermsandConditionPage'
import whatwedo from './Pages/WhatwedoPage'
import privacy from './Pages/PrivacyPolicyPage'
import guarantorsaggreement from './Pages/GuarantorsAgreementPage'
import lendersagreement from './Pages/LendersAgreementPage'
import Borrowersagreement from './Pages/BorrowersAgreementPage'
import Blog from './Pages/BlogPage'


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
          <Route path='/areyou' element={<LendersBorrowers />} />
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
