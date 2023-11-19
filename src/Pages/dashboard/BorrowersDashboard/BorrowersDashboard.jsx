import React from 'react';
import { Link } from 'react-router-dom';
import BorrowersNavbar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbar';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';

const BorrowersDashboard = () => {
  return (
    <div>
      <BorrowersNavbar />
      <BorrowersSideNav />
    </div>
  );
};

export default BorrowersDashboard;
