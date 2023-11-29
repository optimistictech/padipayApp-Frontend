import React from 'react';
import AdminSideNav from '../../../Components/admin/AdminSideNav';
import AdminNavbar from '../../../Components/admin/AdminNavbar';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/AdminSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/AdminNavbar';
import BarGraph from '../../../Components/graph/BarGraph';
import LineGraph from '../../../Components/graph/LineGraph';
import { MdAccessTime } from 'react-icons/md';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import ProgressBar from '../../../Components/ProgressBar'
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(image, subject, amount) {
  return { image, subject, amount};
}

function createPendingData(image, subject, amount, time) {
  return { image, subject, amount, time};
}

function tableData(subject, amount) {
  return {subject, amount};
}

const rows = [
  createData(<img src="https://ik.imagekit.io/b6b9xwu9l/Group%2057.png?updatedAt=1701215289642"/>,
  <div>
    <h4>Home Improvement</h4>
    <p>#52247643</p>
  </div>, 
  <p> ₦899.992</p>),
  createData(<img src="https://ik.imagekit.io/b6b9xwu9l/Group%2056.png?updatedAt=1701215289676"/>,
  <div>
    <h4>Debt Consolidation</h4>
    <p>#55767068</p>
  </div>, 
  <p> ₦500.000</p>),
   createData(<img src="https://ik.imagekit.io/b6b9xwu9l/Group%2057.png?updatedAt=1701215289642"/>,
  <div>
    <h4>Home Improvement</h4>
    <p>#86488097</p>
  </div>, 
  <p>₦130.992</p>),
];

// SECOND TABLE ON THIRD SECTION DATA
const pendingRows = [
  createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730"/>,
  <div>
    <h4>Demo werwr</h4>
    <p>demo_borrow@demo.com</p>
  </div>, 
  <p>$25</p>,
  <p>9 months ago</p>),
  createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704"/>,
  <div>
    <h4>John Doe</h4>
    <p>investor@demo.com</p>
  </div>, 
  <p>$86</p>,
  <p>6 months ago</p>),
  createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730"/>,
  <div>
    <h4>Demo werwr</h4>
    <p>demo_borrow@demo.com</p>
  </div>, 
  <p>$140</p>,
  <p>6 months ago</p>),
  createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704"/>,
  <div>
    <h4>John Doe</h4>
    <p>investor@demo.com</p>
  </div>, 
  <p>$86</p>,
  <p>6 months ago</p>),
  createPendingData(<img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2077.png?updatedAt=1701219518730"/>,
  <div>
    <h4>Dane Doe</h4>
    <p>isakovvv@gmail.com</p>
  </div>, 
  <p>$25</p>,
  <p>6 months ago</p>),
];

// PROGRESS BAR ON FOURTH SECTION DATA

//  TABLE ON FOURTH SECTION DATA
const tableRows = [
  tableData(
  <p>$25</p>,
  <p>9 months ago</p>),
  tableData(
  <p>$140</p>,
  <p>6 months ago</p>),
  tableData(
  <p>$86</p>,
  <p>6 months ago</p>),
  tableData(
  <p>$25</p>,
  <p>6 months ago</p>),
];


const AdminDashboard = () => {
  return (
    <div className='flex'>
      <AdminSideNav />

      <div>

      <AdminNavBar/>
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
              <div className='topright_texts'>
                <span className='text-navColor'>Users</span>
                <br />
                <span className='text-base font-semibold'>22</span>
              </div>
            </div>

            <div className='card_divider'>
              <hr />
            </div>
            <div>
              <div className='bottomleft_text p-4 text-navColor'>
                <span>15</span>
                <span>Investors</span>
              </div>
            </div>
          </div>

          <div id='viewCard' className='shadow w-[220px]'>
            <div id='top_content' className='flex justify-between p-4'>
              <div className='topleft_icon bg-[#E93B77] py-3 px-4 text-white rounded-md relative bottom-10'>
                <i className='fa-solid fa-user'></i>
              </div>
              <div className='topright_texts'>
                <span className='text-navColor'>Loaned</span>
                <br />
                <span className='text-base font-semibold'>&#8358;551,145</span>
              </div>
            </div>

            <div className='card_divider'>
              <hr />
            </div>
            <div>
              <div className='bottomleft_text p-4 text-navColor'>
                <span>123</span>
                <span>Loans</span>
              </div>
            </div>
          </div>

          <div id='viewCard' className='shadow w-[220px]'>
            <div id='top_content' className='flex justify-between p-4'>
              <div className='topleft_icon bg-[#63B967] py-3 px-4 text-white rounded-md relative bottom-10'>
                <i className='fa-solid fa-user'></i>
              </div>
              <div className='topright_texts'>
                <span className='text-navColor'>Investment</span>
                <br />
                <span className='text-base font-semibold'>82</span>
              </div>
            </div>

            <div className='card_divider'>
              <hr />
            </div>
            <div>
              <div className='bottomleft_text p-4 text-navColor'>
                <span>&#8358;4,201</span>
                <span>Average</span>
              </div>
            </div>
          </div>

          <div id='viewCard' className='shadow w-[220px]'>
            <div id='top_content' className='flex justify-between p-4'>
              <div className='topleft_icon bg-[#439DEE] py-3 px-4 text-white rounded-md relative bottom-10'>
                <i className='fa-solid fa-user'></i>
              </div>
              <div className='topright_texts'>
                <span className='text-navColor'>Repaid</span>
                <br />
                <span className='text-base font-semibold'>&#8358;137,483</span>
              </div>
            </div>

            <div className='card_divider'>
              <hr />
            </div>
            <div>
              <div className='bottomleft_text p-4 text-navColor'>
                <span>76</span>
                <span>Payments</span>
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
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.image}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.image}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>

          {/* SECOND TABLE ON THIRD SECTION */}
          <div className="py-4 ">
            <h2>Pending Withdrawals</h2>
            <h5 className='ml-3 text-gray-400 text-xs'>Withdrawers (5)</h5>
          {/* TABLE */}
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} className='mr-20' aria-label="simple table">
        <TableBody>
          {pendingRows.map((row) => (
            <TableRow
              key={row.image}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.image}
              </TableCell>
              <TableCell align="left">{row.subject}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
          </div>
    

          {/* FOURTH SECTION */}
          <div className="flex justify-between pl-5  pb-8">
          <div className="">
            <h3>Investment Portfolio Distribution</h3>
            {/* PROGRESS SECTION FOR SECTION FOUR */}
            <div className="">
              <div className="">
               <div className="flex gap-4">
               <img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704"/>
               <ProgressBar/>
               </div> 
                <div className="flex gap-4">
               <img src="https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2074.png?updatedAt=1701219518704"/>
               <ProgressBar/>
               </div> 
              </div>
            <div className="">
              {/* <ProgressBar/> */}
              {/* <ProgressBar/> */}
            </div>
            </div>
          </div>
          
          <div className="">
          <h3>Lenders Account Summary</h3>
          {/* TABLE SECTION FOR SECTION FOUR */}
          <div className="">

          </div>
          </div>
          </div>
          
      </div>
    </div>
  );
};

export default AdminDashboard;
