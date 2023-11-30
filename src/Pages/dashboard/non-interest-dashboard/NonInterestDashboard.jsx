import React from 'react';
import AdminSideNav from '../../../Components/Auth/Dashboard/sideNavbar/NonInterestSidebar';
import AdminNavbar from '../../../Components/Auth/Dashboard/headerNavBar/NonInterestNavbar';
import BarGraph from '../../../Components/graph/BarGraph';
import LineGraph from '../../../Components/graph/LineGraph';
import { MdAccessTime } from 'react-icons/md';
import ProgressBar from '../../../Components/ProgressBar';
import TableOne from '../../../Components/AdminTables/TableOne'
import TableTwo from '../../../Components/AdminTables/TableTwo';
import TableThree from '../../../Components/AdminTables/TableThree';

const NonInterestDashboard = () => {
  return (
    <div className='flex'>
    <AdminSideNav />

    <div>

    <AdminNavbar/>
    {/* First section */}
    <div className="flex justify-between pt-5 mx-4">
<div id="viewCard" className="shadow-md w-[230px] h-[120px]">
  <div id="top_content" className="flex justify-between p-4">
    <div className="topleft_icon bg-primary py-3 px-4 text-white rounded-md relative bottom-10">
      <i className="fa-solid fa-user" />
    </div>
    <div className="topright_texts">
      <span className="text-navColor">Users</span><br />
      <span className="text-base font-semibold">22</span>
    </div>
  </div>
  <div className="card_divider">
    <hr />
  </div>
  <div>
    <div className="bottomleft_text px-4 text-navColor">
      <span>15</span>
      <span className=''>Investors</span>
    </div>
  </div>
</div>
<div id="viewCard" className="shadow-md w-[230px] h-[120px]">
  <div id="top_content" className="flex justify-between p-4">
    <div className="topleft_icon bg-[#E93B77] py-3 px-4 text-white rounded-md relative bottom-10">
      <i className="fa-solid fa-user" />
    </div>
    <div className="topright_texts">
      <span className="text-navColor">Loaned</span><br />
      <span className="text-base font-semibold">₦551,145</span>
    </div>
  </div>
  <div className="card_divider">
    <hr />
  </div>
  <div>
    <div className="bottomleft_text px-4 text-navColor">
      <span>123</span>
      <span className=''>Loans</span>
    </div>
  </div>
</div>
<div id="viewCard" className="shadow-md w-[230px] h-[120px]">
  <div id="top_content" className="flex justify-between p-4">
    <div className="topleft_icon bg-[#63B967] py-3 px-4 text-white rounded-md relative bottom-10">
      <i className="fa-solid fa-user" />
    </div>
    <div className="topright_texts">
      <span className="text-navColor">Investment</span><br />
      <span className="text-base font-semibold">82</span>
    </div>
  </div>
  <div className="card_divider">
    <hr />
  </div>
  <div>
    <div className="bottomleft_text px-4 text-navColor">
      <span>₦4,201</span>
      <span className=''>Average</span>
    </div>
  </div>
</div>
<div id="viewCard" className="shadow-md w-[230px] h-[120px]" >
  <div id="top_content" className="flex justify-between p-4">
    <div className="topleft_icon bg-[#439DEE] py-3 px-4 text-white rounded-md relative bottom-10">
      <i className="fa-solid fa-user" />
    </div>
    <div className="topright_texts">
      <span className="text-navColor">Repaid</span><br />
      <span className="text-base font-semibold">₦137,483</span>
    </div>
  </div>
  <div className="card_divider">
    <hr />
  </div>
  <div>
    <div className="bottomleft_text px-4 text-navColor">
      <span>76</span>
      <span className=''>Payments</span>
    </div>
  </div>
</div>
</div>


        {/* second section */}
        <div className='flex my-4 justify-between items-center gap-3 mx-4'>
        {/* FIRST BOX */}
        <div className='h-[380px] w-80  shadow-md rounded overflow-hidden p-4 '>
          <div className=''>
          <LineGraph />
          </div>

          <div className='mb-[40px] pl-6'>
            <p className='font-bold text-[#344767]'>Loaned</p>
            <p className='text-[#7B809A] text-sm'>
              Last Campaign Performance
            </p>
            <hr className='border-b border-gray-200 my-[6px]' />
            <div className='flex text-navColor gap-2 items-center'>
              <div className="">
              <MdAccessTime />
              </div>

              <p className='text-[#7B809A] text-sm'>campaign sent 2 days ago</p>
            </div>
          </div>
        </div>
        {/* Second box */}
        <div className='h-[380px] w-90 shadow-md rounded overflow-hidden px-4'>
        <div className="">
        <BarGraph />
        </div>
          <div className='mb-[5px] pl-6'>
            <p className='font-bold text-[#344767]'>Investment</p>
            <p className='text-[#7B809A] text-sm'>
            (+15%) increase in today investment.
            </p>
            <hr className='border-b border-gray-200 my-[6px]' />
            <div className='flex text-navColor gap-2 items-center'>
            <div className=''>
            <MdAccessTime />
            </div>
              <p className='text-[#7B809A] text-sm'>Updated 4 min ago</p>
            </div>
          </div>
        </div>
        {/* third box */}
        <div className='h-[380px] w-90 shadow-md rounded overflow-hidden p-4'>
          <div className=''>
          <LineGraph />
          </div>
          <div className='pl-6'>
            <p className='font-bold text-[#344767]'>Completed Transactions</p>
            <p className='text-[#7B809A] text-sm'>
            Last Campaign Performance
            </p>
            <hr className='border-b border-gray-200 my-[6px]' />
            <div className='flex text-navColor gap-2 items-center'>
              <div className=''>
              <MdAccessTime  />
              </div>
              <p className='text-[#7B809A] text-sm'>Updated 4 min ago</p>
            </div>
          </div>
        </div>
        </div>

        {/* THIRD SECTION*/}
        <div className="flex justify-between pl-5 pt-5 pb-4 pr-8">
        <div className="py-2">
          <h5 className='text-blue-900 font-bold'>Loan Requiring Actions</h5>
          <h6 className='pb-8 pt-2 text-gray-400 text-xs'>Submitted for listing (3)</h6>
        {/* TABLE */}
        <TableOne/>
        </div>

        {/* SECOND TABLE ON THIRD SECTION */}
        <div className="py-2 ">
          <h5 className='text-blue-900 font-bold'>Pending Withdrawals</h5>
          <h6 className='ml-3 mb-2 text-gray-400 text-xs'>Withdrawers (5)</h6>
        {/* TABLE */}
        <TableTwo/>
        </div>
        </div>
  

        {/* FOURTH SECTION */}
        <div className="flex justify-between pl-5 font-sm pr-8 mb-4">
        <div className="">
          <h5 className=" font-bold">Investment Portfolio Distribution</h5>
          {/* PROGRESS SECTION FOR SECTION FOUR */}
          <div className="">
          <ProgressBar/>
          </div>
          
          </div>
        
        <div className="pl-8">
        <h5 className=" font-bold">Lenders Account Summary</h5>
        {/* TABLE SECTION FOR SECTION FOUR */}
        <div className="pt-6">
        <TableThree/>
        </div>
        </div>
        </div>
        
    </div>
  </div>
  )
}

export default NonInterestDashboard