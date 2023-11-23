import React from 'react';
import BarGraph from '../../../Components/graph/BarGraph';
import LineGraph from '../../../Components/graph/LineGraph';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbar';

const BorrowerDashboard = () => {
  return (
    <div className='flex'>
      <BorrowersSideNav />
      <div>
        <BorrowersNavBar />
        <div className='grid grid-cols-3 mt-20 grid-rows-2 gap-x-0 gap-y-8 ml-8'>
          {/* FIRST BOX */}
          <div className='w-80 h-100 shadow-lg rounded-md relative overflow-hidden p-4 '>
            <BarGraph />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>My Loan Records </p>
              <p className='text-[#7B809A] text-sm'>
                Last Campaign Performance
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z'
                    clipRule='evenodd'
                  />
                </svg>

                <p className='text-[#7B809A] text-sm'>Updated 2 days ago</p>
              </div>
            </div>
          </div>
          {/* Second box */}
          <div className='w-80 h-90 shadow-lg rounded-md relative overflow-hidden p-4 '>
            <LineGraph />
            <div className='pt-4'>
              <p className='font-bold text-[#344767]'>Transactions</p>
              <p className='text-[#7B809A] text-sm'>
                (+15%) increase in today investment.
              </p>
              <hr className='border-b border-gray-200 my-4' />
              <div className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-[#7B809A] text-sm'>Updated 4 min ago</p>
              </div>
            </div>
          </div>

          {/* Third box */}
          <div className=' shadow-lg rounded-md relative overflow-hidden p-4 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-28 mt-20 text-center block mx-auto h-40'
            >
              <path
                fillRule='evenodd'
                d='M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z'
                clipRule='evenodd'
              />
            </svg>
            <div className='pt-4'>
              <div className='flex justify-center align-center'></div>
              <h1 className='text-center mb-4 font-bold text-[#344767]'>
                Upload Bank Transaction
              </h1>
              <p className='text-center font-bold mb-4 text-[#344767]'>
                {' '}
                Supporting Documents
              </p>
              <span className='text-[#7B809A] text-sm mb-8 pb-10 text-center mx-auto'>
                Max 5mb
              </span>
              <hr className='border-b border-gray-200 mb-4 ' />
              <div className='flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z'
                    clipRule='evenodd'
                  />
                </svg>
                <p className='text-[#7B809A] text-sm '>Just Updated</p>
              </div>
            </div>
          </div>
          {/* FOURTH BOX */}
          <div className='w-140 h-40 shadow-lg rounded-md mt-14 px-4 flex items-center'>
            <div className='pr-4 pl-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </div>
            <div>
              <p className='pr-32 font-bold text-[#344767]'>
                General
                <br />
                Settings
              </p>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
          </div>
          {/* FIFTH BOX */}
          <div className='w-140 h-40 shadow-lg rounded-md mt-14 px-4 flex items-center'>
            <div className='pr-4 pl-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z'
                />
              </svg>
            </div>
            <div>
              <p className='pr-32 font-bold text-[#344767]'>
                Support
                <br />
                Request
              </p>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
          </div>
          {/* SIXTH BOX */}
          <div className='w-140 h-40 shadow-lg rounded-md mt-14 px-4 flex items-center'>
            <div className='pr-4 pl-8'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>
            </div>
            <div>
              <p className='pr-32 font-bold text-[#344767]'>
                Transaction Supporting
                <br />
                Documents
              </p>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                {' '}
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerDashboard;
