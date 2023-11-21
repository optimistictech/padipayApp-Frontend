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
import ContactUs from './Pages/ContactUs';
import TermsandConditionPage from './Pages/TermsandConditionPage';
import WhatwedoPage from './Pages/WhatwedoPage';
import Lendersagreement from './Pages/LendersAgreementPage';
import BlogPage from './Pages/BlogPage';
import PostForBlog from './Pages/PostForBlog';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import GuarantorsAgreementPage from './Pages/GuarantorsAgreementPage';
import MobileStore from './Components/Sections/MobileStore';
import LendersDashboard from './Pages/dashboard/lendersDashboard/LendersDashboard';
import BorrowersDashboard from './Pages/dashboard/borrowersDashboard/BorrowerDashboard';
import BorrowersSectionTwo from './Pages/dashboard/borrowersDashboard/BorrowerSectionTwo';
import BorrowerSectionThree from './Pages/dashboard/borrowersDashboard/BorrowerSectionThree';
import BorrowerSectionFour from './Pages/dashboard/borrowersDashboard/BorrowerSectionFour';
import BorrowerSectionFive from './Pages/dashboard/borrowersDashboard/BorrowerSectionFive';
import BorrowerSectionSix from './Pages/dashboard/borrowersDashboard/BorrowerSectionSix';
import Calculator from './Components/Calculator/Calculator';

          

function App() {
  return (
    <BrowserRouter>
      {/* <PadiLogo /> */}
      {/* <Navbar/> */}
      {/* <MobileStore /> */}

      <Routes>
        <Route path='/lendersagree' element={<Lendersagreement />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/community' element={<CommunityPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/post-for-blog' element={<PostForBlog />} />
        <Route path='/account-type' element={<LendersBorrowers />} />
        <Route path='/privacy' element={<PrivacyPolicyPage />} />
        <Route
          path='/guarantor-agreement'
          element={<GuarantorsAgreementPage />}
        />
        <Route path='/' element={<LandingPage />} />
        <Route path='/lendersDashboard' element={<LendersDashboard />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/borrowersDashboard' element={<BorrowersDashboard />} />
        <Route path='/borrowersDashboard2' element={<BorrowersSectionTwo/>} />
        <Route path='/borrowersDashboard3' element={<BorrowerSectionThree/>} />
        <Route path='/borrowersDashboard4' element={<BorrowerSectionFour/>} />
        <Route path='/borrowersDashboard5' element={<BorrowerSectionFive/>} />
        <Route path='/borrowersDashboard6' element={<BorrowerSectionSix/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
