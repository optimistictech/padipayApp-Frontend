import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';

const LendersDashboardFive = () => {
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav />
      <section>
        <LendersNavbarVerify />
        {/* body */}
        <div></div>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardFive;
