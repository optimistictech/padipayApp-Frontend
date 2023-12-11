import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BarGraph from '../../../Components/graph/BarGraph';
import LineGraph from '../../../Components/graph/LineGraph';
import Uploader from '../../../Components/Sections/upload/Uploader';
import FooterDashboard from '../../../Components/Auth/Dashboard/FooterDashboard';
import { MdAccessTime } from 'react-icons/md';

import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbar';

const BorrowerDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  },[])
  
  return (
    <div className='flex'>
      <BorrowersSideNav />
      <div>
        <BorrowersNavBar />
        <div className='flex justify-between items-center mt-5 gap-3 mx-2 '>
          {/* FIRST BOX */}
          <div className='h-100 w-70  shadow-md rounded overflow-hidden p-4 '>
            <div className=''>
              <BarGraph />
            </div>

            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>My Investments </p>
              <p className='text-[#7B809A] text-sm'>
                Last Campaign Performance
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className='flex text-navColor gap-2 items-center'>
                <MdAccessTime />

                <p className='text-[#7B809A] text-sm'>Updated 2 days ago</p>
              </div>
            </div>
          </div>
          {/* Second box */}
          <div className='h-100 w-80   shadow-md rounded overflow-hidden p-4'>
            <LineGraph />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Transactions</p>
              <p className='text-[#7B809A] text-sm'>
                (+15%) increase in today investment.
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className='flex text-navColor gap-2 items-center'>
                <MdAccessTime />
                <p className='text-[#7B809A] text-sm'>Updated 4 min ago</p>
              </div>
            </div>
          </div>

          {/* Third box */}
          <div className=' h-[72%] w-80 shadow-md rounded overflow-hidden p-4 '>
            {/* Upload form */}
            <Uploader />

            {/* Card Contents */}
            <div className='pt-2'>
              <hr className='border-b border-gray-200 mb-4 ' />
              <div className='flex text-navColor gap-2 items-center'>
                <MdAccessTime />
                <p className='text-[#7B809A] text-sm '>Just Updated</p>
              </div>
            </div>
          </div>
        </div>
        {/* SECOND SECTION */}
        <FooterDashboard />
      </div>
    </div>
  );
};

export default BorrowerDashboard;
