import { List } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
//import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const AdminSideNav = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className=' w-[30%]  overscroll-auto  overflow-y-scroll text-white bg-[#003399] font-primaryFont p-5'>
      {/* head */}
      <div className='px-3 py-2'>
        {/* <img src={padiLogo} alt='padiLogo' /> */}
        <span className=' font-bold'>Admin Dashboard</span>
      </div>
      <hr className='font-bold my-4' />
      {/* Name */}
      <div className='lg:flex text-white flex-row justify-between items-center px-3 '>
        <Link
          to='/adminDashboard'
          className='flex gap-6 text-white justify-between items-center py-4'
        >
          <p className='flex items-center gap-3'>
            {/* img icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 2724'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <span>Godsfavour</span>
          </p>
          {/* down arrow */}
        </Link>
        {/* <Link to='/'>Change Account Type</Link> */}
      </div>
      <hr className='font-bold mb-8' />
      {/* dashboards */}
      <Link
        to='/adminDashboard'
        className='text-white flex gap-2 active items-center px-5 bg-navColor  py-3 mt-5 rounded'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 2724'
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
        <span className='my-2'>Dashboards</span>
      </Link>

      {/* pages */}
      <p className='mt-6'>Pages</p>

      {/* investments*/}
      <Link
        to='/adminDashboardInvestment'
        className='text-white flex gap-7 active items-center px-3 py-5 rounded'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 2724'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.5071.125 1.125 1.125h12.75c.621 0 1.125-.5071.125-1.125V11.25a9 9 0 00-9-9z'
          />
        </svg>

        <span className=''>Investments</span>
      </Link>

      {/* lend */}
      <List>
        <ListItemButton onClick={handleClick}>
          <Link to='/adminDashboardLoans' className='flex gap-7 items-center '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 2724'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.5071.125 1.125v9.75c0 .621-.5071.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
              />
            </svg>
            <span className='text-white pr-24'>Loans</span>
            {/* <ListItemText primary='Loans' /> */}
          </Link>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 7 }}>
              <Link to='/newloan'>
                {' '}
                <span className='text-white'>New Loans</span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 7 }}>
              <Link to='/listedloan'>
                {' '}
                <span className='text-white'>Listed Loans</span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 7 }}>
              <Link to='/fundedloan'>
                {' '}
                <span className='text-white'>Funded Loans</span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 7 }}>
              <Link to='/nonInterestLoan'>
                {' '}
                <span className='text-white'>Non-Interest Loans</span>
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* users */}
      <List>
        <ListItemButton onClick={handleClick}>
          <Link to='/usersborrowers' className='flex gap-7 items-center '>
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
                d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
              />
            </svg>
            <span className='text-white pr-24'>Users</span>
            {/* <ListItemText primary='Loans' /> */}
          </Link>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 7 }}>
              <Link to='/usersborrowers'>
                {' '}
                <span className='text-white'>Borrower</span>
              </Link>
            </ListItemButton>
            <ListItemButton sx={{ pl: 7 }}>
              <Link to='/userslenders'>
                {' '}
                <span className='text-white'>Lender</span>
              </Link>
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      {/* withdrawals*/}
      <Link
        to='/adminWithdrawal'
        className='text-white flex gap-7 active items-center px-3 py-5 rounded'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 2724'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.5071.125 1.125v9.75c0 .621-.5071.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
          />
        </svg>

        <span className='text-white'>Withdrawals</span>
      </Link>
      {/* Transactions */}
      <Link
        to='/admintranscations'
        className='text-white flex gap-7 active items-center px-3 py-5 rounded'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 2724'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
          />
        </svg>

        <span className=''>Transactions</span>
      </Link>
      {/* Avaliable Card */}
      <div className=''>
        <hr className='font-bold my-8' />
        <p>Blogs</p>

        {/* Transactions */}
        <Link
          to='/'
          className='text-white flex gap-7 active items-center px-3 py-5 rounded'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 2724'
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

          <span className=''>Overview</span>
        </Link>

        {/* Transactions */}
        <Link
          to='/'
          className='text-white flex gap-7 active items-center px-3 py-5 rounded'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 2724'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z'
            />
          </svg>

          <span className=''>Components</span>
        </Link>

        {/* Transactions */}
        <Link
          to='/'
          className='text-white flex gap-7 active items-center px-3 py-5 rounded'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 2724'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.5071.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.5071.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.5071.125-1.125 1.125M2.25 5.625v1.5c0 .621.5071.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.5071.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.5071.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.5071.125 1.125v1.5c0 .621-.5071.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.5071.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.5071.125-1.125 1.125M12 10.875c0 .621.5071.125 1.125 1.125m-2.25 0c.621 0 1.125.5071.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.5071.125 1.125v1.5c0 .621-.5071.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.5071.125-1.125 1.125M12 14.625c0 .621.5071.125 1.125 1.125m-2.25 0c.621 0 1.125.5071.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
            />
          </svg>

          <span className=''>Changelogs</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideNav;
