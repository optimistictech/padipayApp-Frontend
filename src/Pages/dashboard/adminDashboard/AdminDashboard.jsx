import React from 'react';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/AdminSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/AdminNavbar';

const AdminDashboard = () => {
  return (
    <div className='flex'>
      <BorrowersSideNav/>
      <BorrowersNavBar/>
    </div>
  )
}

export default AdminDashboard