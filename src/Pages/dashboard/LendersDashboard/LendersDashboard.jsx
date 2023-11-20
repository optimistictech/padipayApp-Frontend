import React from 'react';
import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/LendersSideNav';
import LendersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/LendersNavbar';

const LendersDashboard = () => {
  return (
    <div>
      <LendersNavbar />
      <LendersSideNav />
    </div>
  );
};

export default LendersDashboard;
