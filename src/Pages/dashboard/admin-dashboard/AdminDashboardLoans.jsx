import React from 'react';
import AdminNavbar2 from '../../../Components/admin/AdminNavbar2';
import AdminNavbar from '../../../Components/admin/AdminNavbar';
import AdminSideNav from '../../../Components/admin/AdminSideNav';
import LoanTable from '../../../Components/admin/LoansTable';

const AdminDashboardLoans = () => {
  return (
    <div className='flex bg-[#F0F2F5]'>
      <AdminSideNav />
      <div className='w-[100%]'>
        <AdminNavbar />
        <AdminNavbar2 />
        {/* Headings */}
        <div className='bg-white mx-5 px-10 py-4 font-bold'>
          <p>4 Loans</p>
        </div>
        {/* Table */}
        <div className='m-5'>
          <LoanTable />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLoans;
