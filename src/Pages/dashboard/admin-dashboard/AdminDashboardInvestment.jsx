import React from 'react';
import AdminSideNav from '../../../Components/admin/AdminSideNav';
import AdminNavbar2 from '../../../Components/admin/AdminNavbar2';
import AdminNavbar from '../../../Components/admin/AdminNavbar';
import { Link } from 'react-router-dom';
import InvestmentTable from '../../../Components/admin/InvestmentTable';

const AdminDashboardInvestment = () => {
  return (
    <div className='flex bg-[#F0F2F5]'>
      <AdminSideNav />
      <div className='w-[100%]'>
        <AdminNavbar />
        <AdminNavbar2 />
        {/* Headings */}
        <div className='bg-white mx-5 px-10 py-4 font-bold'>
          <p>127 Investment</p>
        </div>
        {/* Table */}
        <div className='m-5'>
          <InvestmentTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardInvestment;
