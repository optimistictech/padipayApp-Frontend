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
import SettingsPage from './Pages/SettingsPage';

// import MobileStore from './Components/Sections/MobileStore';

import BorrowerDashboard from './Pages/dashboard/borrower-dashboard/BorrowerDashboard';
import BorrowerSectionTwo from './Pages/dashboard/borrower-dashboard/BorrowerDashboardTwo';
import BorrowerSectionThree from './Pages/dashboard/borrower-dashboard/BorrowerDashboardThree';
import BorrowerSectionFour from './Pages/dashboard/borrower-dashboard/BorrowerDashboardFour';
import BorrowerSectionFive from './Pages/dashboard/borrower-dashboard/BorrowerDashboardFive';
import BorrowerSectionSix from './Pages/dashboard/borrower-dashboard/BorrowerDashboardSix';
import BorrowerDashboardSeven from './Pages/dashboard/borrower-dashboard/BorrowerDashboardSeven';
import BorrowerDashboardEight from './Pages/dashboard/borrower-dashboard/BorrowerDashboardEight';

import LendersDashboard from './Pages/dashboard/lender-dashboard/LendersDashboard';
import LendersDashboardTwo from './Pages/dashboard/lender-dashboard/LendersDashboardTwo';
import LendersDashboardThree from './Pages/dashboard/lender-dashboard/LendersDashboardThree';
import LendersDashboardFour from './Pages/dashboard/lender-dashboard/LendersDashboardFour';
import LendersDashboardFive from './Pages/dashboard/lender-dashboard/LendersDashboardFive';
import LendersDashboardSix from './Pages/dashboard/lender-dashboard/LendersDashboardSix';

import AdminDashboard from './Pages/dashboard/admin-dashboard/AdminDashboard';
import AdminDashboard3 from './Pages/dashboard/admin-dashboard/AdminDashboard3';
import AdminDashboardInvestment from './Pages/dashboard/admin-dashboard/AdminDashboardInvestment';
import AdminDashboardLoans from './Pages/dashboard/admin-dashboard/AdminDashboardLoans';

import NonInterestDashboard from './Pages/dashboard/non-interest-dashboard/NonInterestDashboard';
import DeviceFinanceForm from './Pages/dashboard/non-interest-dashboard/DeviceFinanceForm';
import NewLoans from './Pages/dashboard/admin-dashboard/admin-loans/NewLoans';
import ListedLoans from './Pages/dashboard/admin-dashboard/admin-loans/ListedLoans';
import FundedLoans from './Pages/dashboard/admin-dashboard/admin-loans/FundedLoans';
import NonInterestLoan from './Pages/dashboard/admin-dashboard/admin-loans/NonInterestLoan';
import UsersLender from './Pages/dashboard/admin-dashboard/admin-users/UsersLender';
import UsersBorrower from './Pages/dashboard/admin-dashboard/admin-users/UsersBorrower';
import AdminWithdrawal from './Pages/dashboard/admin-dashboard/AdminWithdrawal';
import AdminTransactions from './Pages/dashboard/admin-dashboard/AdminTransactions';

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
        <Route path='/settings' element={<SettingsPage />} />

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

        {/* ADMIN ROUTER */}
        <Route path='/adminDashboard' element={<AdminDashboard />} />
        <Route path='/adminDashboardLoans' element={<AdminDashboardLoans />} />
        <Route path='/adminDashboard3' element={<AdminDashboard3 />} />
        <Route
          path='/adminDashboardInvestment'
          element={<AdminDashboardInvestment />}
        />
        <Route path='/adminWithdrawal' element={<AdminWithdrawal />} />
        <Route path='/admintranscations' element={<AdminTransactions />} />

        {/* admin loans */}
        <Route path='/newloan' element={<NewLoans />} />
        <Route path='/listedloan' element={<ListedLoans />} />
        <Route path='/fundedloan' element={<FundedLoans />} />
        <Route path='/nonInterestLoan' element={<NonInterestLoan />} />

        {/* admin users */}
        <Route path='/userslenders' element={<UsersLender />} />
        <Route path='/usersborrowers' element={<UsersBorrower />} />

        <Route
          path='/NonInterestDashboard'
          element={<NonInterestDashboard />}
        />
        <Route path='/DeviceFinanceForm' element={<DeviceFinanceForm />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
