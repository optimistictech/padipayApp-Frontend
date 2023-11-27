import './App.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignupPage from './Pages/SignupPage';
import AboutPage from './Pages/AboutusPage';
import CommunityPage from './Pages/CommunityPage';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import PadiLogo from './Components/PadiLogo';
// import TermsandConditionPage from './Pages/TermsandConditionPage';
// import MobileStore from './Components/Sections/MobileStore';

import LendersBorrowers from './Pages/LendersBorrowers';
import LoginPage from './Pages/LoginPage';
import ContactUs from './Pages/ContactUs';
import WhatwedoPage from './Pages/WhatwedoPage';
import Lendersagreement from './Pages/LendersAgreementPage';
import BlogPage from './Pages/BlogPage';
import PostForBlog from './Pages/PostForBlog';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import Calculator from './Components/Calculator/Calculator';
import GuarantorsAgreementPage from './Pages/GuarantorsAgreementPage';

import BorrowerDashboard from './Pages/dashboard/borrowersDashboard/BorrowerDashboard';
import BorrowerSectionTwo from './Pages/dashboard/borrowersDashboard/BorrowerSectionTwo';
import BorrowerSectionThree from './Pages/dashboard/borrowersDashboard/BorrowerSectionThree';
import BorrowerSectionFour from './Pages/dashboard/borrowersDashboard/BorrowerSectionFour';
import BorrowerSectionFive from './Pages/dashboard/borrowersDashboard/BorrowerSectionFive';
import BorrowerSectionSix from './Pages/dashboard/borrowersDashboard/BorrowerSectionSix';
import BorrowerDashboardSeven from './Pages/dashboard/borrowersDashboard/BorrowerDashboardSeven';
import BorrowerDashboardEight from './Pages/dashboard/borrowersDashboard/BorrowerDashboardEight';

import LendersDashboard from './Pages/dashboard/lendersDashboard/LendersDashboard';
import LendersDashboardTwo from './Pages/dashboard/lendersDashboard/LendersDashboardTwo';
import LendersDashboardThree from './Pages/dashboard/lendersDashboard/LendersDashboardThree';
import LendersDashboardFour from './Pages/dashboard/lendersDashboard/LendersDashboardFour';
import LendersDashboardFive from './Pages/dashboard/lendersDashboard/LendersDashboardFive';
import LendersDashboardSix from './Pages/dashboard/lendersDashboard/LendersDashboardSix';

import AdminDashboard from './Pages/dashboard/adminDashboard/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      {/* <PadiLogo /> */}
      {/* <Navbar/> */}
      {/* <MobileStore /> */}

      <Routes>
        <Route path='/lendersagree' element={<Lendersagreement />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/what-we-do' element={<WhatwedoPage />} />
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
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/borrowersDashboard' element={<BorrowerDashboard />} />
        <Route path='/borrowersDashboard2' element={<BorrowerSectionTwo />} />
        <Route path='/borrowersDashboard3' element={<BorrowerSectionThree />} />
        <Route path='/borrowersDashboard4' element={<BorrowerSectionFour />} />
        <Route path='/borrowersDashboard5' element={<BorrowerSectionFive />} />
        <Route path='/borrowersDashboard6' element={<BorrowerSectionSix />} />
        <Route
          path='/borrowersDashboard7'
          element={<BorrowerDashboardSeven />}
        />
        <Route
          path='/borrowersDashboard8'
          element={<BorrowerDashboardEight />}
        />

        <Route path='/lendersDashboard' element={<LendersDashboard />} />
        <Route path='/lendersDashboard2' element={<LendersDashboardTwo />} />
        <Route path='/lendersDashboard3' element={<LendersDashboardThree />} />
        <Route path='/lendersDashboard4' element={<LendersDashboardFour />} />
        <Route path='/lendersDashboard5' element={<LendersDashboardFive />} />
        <Route path='/lendersDashboard6' element={<LendersDashboardSix />} />

        <Route path='/adminDashboard' element={<AdminDashboard />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
