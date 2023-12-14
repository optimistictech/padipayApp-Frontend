import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import LendersSideNav from '../../../Components/Auth/Dashboard/side-navbar/LendersSideNav';
import LendersNavbarVerify from '../../../Components/Auth/Dashboard/header-navbar/LendersNavbarVerify';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import { IoMdStar } from 'react-icons/io';
import { IoMdStarHalf } from 'react-icons/io';
import { Button } from '@mui/material';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const LendersDashboardFive = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [authloading, setAuthloading] = useState(true);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');

      return;
    }
    setUser(response);
    setLoading(false);
    setAuthloading(false);
  }, [navigate]);

  if (authloading) {
    return;
  }

  //
  return (
    <div className='lg:flex w-full'>
      <LendersSideNav user={user} loading={loading} />
      <section>
        <LendersNavbarVerify user={user} loading={loading} />
        {/* body */}

        <section className='bg-primary h-[300px] m-4 text-white'>
          {/* Borrowers Profile */}
          <div className='flex flex-col items-center pt-5'>
            <img
              src='https://ik.imagekit.io/ffdguzut1/bg%20-%20graph4.png'
              alt=''
              className='flex item-center justify-center w-20 h-20 rounded-full border-[2px] border-white'
            />
            <p className='font-bold text-[24px] pt-2'>Collins Frank</p>
          </div>
          <div className='flex items-center text-center mt-2 justify-evenly'>
            {/* box 1 */}
            <div className='bg-white p-2 rounded-md w-32 '>
              <p className='text-lowergrey'>My Rating</p>
              <div className='text-primary flex justify-center items-center'>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
              </div>
            </div>
            {/* box 2 */}
            <div className='bg-white p-2 rounded-md w-32  text-lowergrey '>
              <p>Credit Score</p>
              <p>60</p>
            </div>
            {/* box 3 */}
            <div className='bg-white p-2 rounded-md w-32  text-lowergrey'>
              <p>Risk Rating</p>
              <p>N/A</p>
            </div>
          </div>

          {/* Confirmation btn */}
          <div className='bg-[#1b006b] flex justify-between p-5 items-center mt-5 text-white'>
            <Button>
              <div className='text-[24px] pr-1  text-[#0fe600]'>
                <IoMdCheckmarkCircle />
              </div>

              <span className='text-white'>Accept this loan</span>
            </Button>
            <Button>
              <div className='text-[24px] pr-1  text-[#f50000]'>
                <MdCancel />
              </div>
              <span className='text-white'>Decline this loan</span>
            </Button>
          </div>
        </section>

        {/* second container */}
        <section className='bg-[#eeeded] my-10 mx-5 '>
          <div className='bg-white rounded-md shadow-lg w-[95%] justify-center mt-10 p-5 m-5'>
            <h2 className='font-bold text-[20px] pb-2'>Loan Details</h2>
            {/* conatiner */}
            <div className='flex item-center pb-2 justify-between'>
              <p>Principal</p>
              <p>N10,000.00</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Interest(10%)</p>
              <p>N2,000</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Transaction Fee</p>
              <p>N150.10</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Platform Deductions</p>
              <p>N500</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Your Earnings</p>
              <p>N1,500.78</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Principal</p>
              <p>N10,000.00</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Tenor</p>
              <p>2 months</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Status</p>
              <p>PENDING LENDER'S APPROVAL</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Application date</p>
              <p>Nov 14 2023</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Purpose of loan</p>
              <p>Personal</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-lg w-[95%] justify-center mt-5 p-5 mx-5'>
            <h2 className='font-bold text-[20px] pb-2'>Loan History</h2>
            <div className='flex item-center pb-2 justify-between'>
              <p>Paid Loan</p>
              <p>2</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Bad Loan</p>
              <p>None</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Loan approved</p>
              <p>2</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Value of loan approved</p>
              <p>N10,000.00</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Date of last loan approved</p>
              <p>Oct 20 2023</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Total loan requests</p>
              <p>7</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Borrower since</p>
              <p>Sept 10 2023</p>
            </div>
          </div>
          <div className='bg-white rounded-md shadow-lg w-[95%] justify-center my-5 p-5 mx-5'>
            <h2 className='font-bold text-[20px] pb-2'>Personal Details</h2>
            <div className='flex item-center pb-2 justify-between'>
              <p>Age</p>
              <p>24</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Marital Status</p>
              <p>Single</p>
            </div>
            <div className='flex item-center pb-2 justify-between'>
              <p>Dependents</p>
              <p>None</p>
            </div>
          </div>
        </section>

        <FooterDashboard />
      </section>
    </div>
  );
};

export default LendersDashboardFive;
