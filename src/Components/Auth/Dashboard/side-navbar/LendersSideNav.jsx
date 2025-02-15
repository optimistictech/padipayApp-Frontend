import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom/dist';

<<<<<<< HEAD:src/Components/Auth/Dashboard/side-navbar/LendersSideNav.jsx
const LendersSideNav = ({ user, loading }) => {
=======
const LendersSideNav = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user){
      navigate("/login")
    }
  },[])

>>>>>>> 184c7c47226dffb067448114a8d3150e7930bc0d:src/Components/Auth/Dashboard/sideNavbar/LendersSideNav.jsx
  const [accountType, setAccountType] = useState('borrower');
  const navigate = useNavigate();

  const toggleAccountChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleLinkClick = () => {
    setAccountType(accountType === 'borrower' ? 'switch' : 'borrower');
  };

  // logout user
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div
      spacing={2}
      className=' w-[27%] text-white bg-[#003399] font-primaryFont p-5'
    >
      {/* head */}
      <div className='px-3 py-2'>
        <span className=' font-bold'>Hello! Padi-Lender</span>
      </div>

      <hr className='font-bold my-4' />
      {/* Name */}
      <div
        className='lg:flex flex-row justify-between items-center px-3'
        onClick={handleLinkClick}
      >
        <Link
          to={
            accountType === 'borrower'
              ? '/lendersDashboard'
              : '/borrowersDashboard'
          }
          className='flex gap-8 items-center py-4 cursor-pointer'
        >
          <p className='flex items-center gap-1'>
            {/* img icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='white'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <span>
<<<<<<< HEAD:src/Components/Auth/Dashboard/side-navbar/LendersSideNav.jsx
              {accountType === 'borrower' ? (
                <>
                  {loading ? (
                    'loading...'
                  ) : (
                    <>
                      {user.firstName} {user.lastName}
                    </>
                  )}
                </>
              ) : (
                'Switch to a Borrower'
              )}
=======
              {accountType === 'borrower'
                ?   `
                <span className='font-bold'>{}</span> `
                : 'Switch to a Borrower'}
>>>>>>> 184c7c47226dffb067448114a8d3150e7930bc0d:src/Components/Auth/Dashboard/sideNavbar/LendersSideNav.jsx
            </span>
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 cursor-pointer'
            onClick={toggleAccountChange}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 8.25l-7.5 7.5-7.5-7.5'
            />
          </svg>
        </Link>
        {/* down arrow */}
        <Select
          value={accountType}
          onChange={toggleAccountChange}
          variant='outlined'
          className='cursor-pointer'
          style={{ display: 'none' }}
        >
          <MenuItem value='borrower'>
            {/* APPLICATION OF USER'S NAME TO SHOW ON DASHBOARD */}
          <span className='font-bold'>{user && user.user.firstName}</span> 
          </MenuItem>
          <MenuItem value='switch'>Switch to a Borrower</MenuItem>
        </Select>
        {/* <Link to='/'>Change Account Type</Link> */}
      </div>

      <hr className='font-bold my-3' />

      {/* dashboard */}
      <Link
        to='/lendersDashboard'
        className='flex gap-4 active items-center px-3 bg-[#4F4F52]  py-4 mt-5 rounded'
      >
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
            d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
          />
        </svg>
        <span className=''>Dashboard</span>
      </Link>

      {/* lend */}
      <Link
        to='/lendersDashboard2'
        className='flex gap-4 items-center px-3 py-5 '
      >
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
            d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
          />
        </svg>

        <span className=''>Lend</span>
      </Link>

      {/* Invest */}
      <Link to='/' className='flex gap-4 active items-center px-3 py-5 rounded'>
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
            d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
          />
        </svg>

        <span className=''>Invest</span>
      </Link>

      {/* Record */}
      <Link
        to='/adminDashboard'
        className='flex gap-4 active items-center px-3 py-5 rounded'
      >
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
            d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
          />
        </svg>

        <span className=''>Analytics</span>
      </Link>

      {/* Risk Apetite */}
      <Link
        to='/lendersDashboard2'
        className='flex gap-4 active items-center px-3 py-5 rounded'
      >
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
            d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z'
          />
        </svg>

        <span className=''>Risk Apetite</span>
      </Link>

      {/* Settings */}
      <Link
        to='/setting'
        className='flex gap-4 active items-center px-3 py-5 rounded'
      >
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
            d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>

        <span className=''>Settings</span>
      </Link>

      <div
        style={{ cursor: 'pointer' }}
        className='flex gap-4 active items-center px-3 py-5 rounded'
        onClick={handleLogout}
      >
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
            d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>

        <span className=''>Logout</span>
      </div>

      {/* Avaliable Card */}
      <div className='bg-white text-black p-5 mt-10 rounded'>
        <div className='flex justify-between items-center'>
          <p>Available</p>
          <p className='font-bold'>
            <span>&#8358;</span>0
          </p>
        </div>
        <div className='flex flex-col my-5'>
          <button className='border-solid border mb-3 border-black rounded py-2 shadow-md'>
            Add Funds
          </button>

          <Link
            to='/'
            className=' bg-[#646464] rounded text-center py-2 bg-opacity-40'
          >
            Create Auto Invest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LendersSideNav;
