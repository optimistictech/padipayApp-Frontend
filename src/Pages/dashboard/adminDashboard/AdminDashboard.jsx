import React from 'react';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/AdminSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/AdminNavbar';
import BarGraph from '../../../Components/graph/BarGraph';
import LineGraph from '../../../Components/graph/LineGraph';
import { MdAccessTime } from 'react-icons/md';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import ProgressBar from '../../../Components/ProgressBar';
import TableOne from '../../../Components/AdminTables/TableOne'
import TableTwo from '../../../Components/AdminTables/TableTwo';
import TableThree from '../../../Components/AdminTables/TableThree';

const AdminDashboard = () => {
  return (
    <div className='flex'>
       <BorrowersSideNav/>

      <div>
      <BorrowersNavBar/>
      {/* First section */}
      <div className="flex justify-between gap-4 pl-5 py-10 pr-10">
            <div id="viewCard" className="shadow w-[220px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-primary py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
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
                <div className="bottomleft_text p-4 text-navColor">
                  <span>15</span>
                  <span>Investors</span>
                </div>
              </div>
            </div>

            <div id="viewCard" className="shadow w-[220px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-[#E93B77] py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="topright_texts">
                  <span className="text-navColor">Loaned</span><br />
                  <span className="text-base font-semibold">&#8358;551,145</span>
                </div>
              </div>

              <div className="card_divider">
                <hr />
              </div>
              <div>
                <div className="bottomleft_text p-4 text-navColor">
                  <span>123</span>
                  <span>Loans</span>
                </div>
              </div>
            </div>

            <div id="viewCard" className="shadow w-[220px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-[#63B967] py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
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
                <div className="bottomleft_text p-4 text-navColor">
                  <span>&#8358;4,201</span>
                  <span>Average</span>
                </div>
              </div>
            </div>

            <div id="viewCard" className="shadow w-[220px]">
              <div id="top_content" className="flex justify-between p-4">
                <div
                  className="topleft_icon bg-[#439DEE] py-3 px-4 text-white rounded-md relative bottom-10"
                >
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="topright_texts">
                  <span className="text-navColor">Repaid</span><br />
                  <span className="text-base font-semibold">&#8358;137,483</span>
                </div>
              </div>

              <div className="card_divider">
                <hr />
              </div>
              <div>
                <div className="bottomleft_text p-4 text-navColor">
                  <span>76</span>
                  <span>Payments</span>
                </div>
              </div>
            </div>
          </div>
          {/* second section */}
          <div className='flex justify-between items-center gap-3 mx-4'>
          {/* FIRST BOX */}
          <div className='h-100 w-80  shadow-md rounded overflow-hidden p-4 '>
            <div className=''>
            <LineGraph />
            </div>

            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Loaned</p>
              <p className='text-[#7B809A] text-sm'>
                Last Campaign Performance
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className='flex text-navColor gap-2 items-center'>
                <MdAccessTime />

                <p className='text-[#7B809A] text-sm'>campaign sent 2 days ago</p>
              </div>
            </div>
          </div>
          {/* Second box */}
          <div className='h-100 w-80   shadow-md rounded overflow-hidden p-4'>
          <BarGraph />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Investment</p>
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
          {/* third box */}
          <div className='h-100 w-80   shadow-md rounded overflow-hidden p-4'>
            <LineGraph />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Completed Transactions</p>
              <p className='text-[#7B809A] text-sm'>
              Last Campaign Performance
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className='flex text-navColor gap-2 items-center'>
                <MdAccessTime />
                <p className='text-[#7B809A] text-sm'>Updated 4 min ago</p>
              </div>
            </div>
          </div>
          </div>

          {/* THIRD SECTION*/}
          <div className="flex justify-between pl-5 pt-5 pb-8">
          <div className="py-4 ">
            <h2>Loan Requiring Actions</h2>
            <h5 className='pb-8 pt-2 text-gray-400 text-xs'>Submitted for listing (3)</h5>
          {/* TABLE */}
          <TableOne/>
          </div>

          {/* SECOND TABLE ON THIRD SECTION */}
          <div className="py-4 ">
            <h2>Pending Withdrawals</h2>
            <h5 className='ml-3 text-gray-400 text-xs'>Withdrawers (5)</h5>
          {/* TABLE */}
          <TableTwo/>
          </div>
          </div>
    

          {/* FOURTH SECTION */}
          <div className="flex justify-between pl-5  pb-8 mb-12">
          <div className="">
            <h3>Investment Portfolio Distribution</h3>
            {/* PROGRESS SECTION FOR SECTION FOUR */}
            <ProgressBar/>
            
          </div>
          
          <div className="">
          <h3>Lenders Account Summary</h3>
          {/* TABLE SECTION FOR SECTION FOUR */}
          <TableThree/>
          </div>
          </div>
          
      </div>

    </div>
  )
}

export default AdminDashboard