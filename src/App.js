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
import LendersBorrowers from './Pages/LendersBorrowers';
import LoginPage from './Pages/LoginPage';
import BlogPage from './Pages/BlogPage';
import PostForBlog from './Pages/PostForBlog';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import GuarantorsAgreementPage from './Pages/GuarantorsAgreementPage';
import MobileStore from './Components/Sections/MobileStore';
import LendersDashboard from './Pages/dashboard/LendersDashboard/LendersDashboard';
import BorrowersDashboard from './Pages/dashboard/BorrowersDashboard/BorrowersDashboard';
import Calculator from './Components/Calculator/Calculator';

function App() {
  return (
    <BrowserRouter>
      {/* <PadiLogo /> */}
      {/* <Navbar/> */}
      {/* <MobileStore /> */}

      <Routes>
        <Route path='/aboutus' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/postforblog' element={<PostForBlog />} />
        <Route path='/lendersBorrowers' element={<LendersBorrowers />} />
        <Route path='/privacy' element={<PrivacyPolicyPage />} />
        <Route path='/guarantoragree' element={<GuarantorsAgreementPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/lendersDashboard' element={<LendersDashboard />} />
        <Route path='/borrowersDashboard' element={<BorrowersDashboard />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
