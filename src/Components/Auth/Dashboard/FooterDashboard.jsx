import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { IoMdDocument } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FooterDashboard = () => {
  return (
    <div className='flex items-center gap-3 my-12 mx-4 text-[#344767]'>
      {/* 1 */}
      <Link
        to='/'
        className='group  hover:bg-slate-50 h-32 shadow rounded p-5 flex gap-5 items-center'
      >
        <div className='text-[50px]'>
          <IoMdSettings />
        </div>
        <p className='text-[18px] font-bold '>General Settings</p>
        <div className='text-[30px]'>
          <MdKeyboardArrowRight />
        </div>
      </Link>

      {/*2*/}
      <Link
        to='/'
        className='group hover:bg-slate-50 h-32 shadow rounded p-5 flex gap-5 items-center'
      >
        <div className='text-[50px]'>
          <IoMdCall />
        </div>
        <div>
          <p className='text-[18px] font-bold'>Support Request</p>
        </div>
        <div className='text-[30px]'>
          <MdKeyboardArrowRight />
        </div>
      </Link>

      {/* 3 */}
      <Link
        to='/'
        className='group hover:bg-slate-50 h-32 shadow rounded p-5 flex gap-5 items-center'
      >
        <div className='text-[50px]'>
          <IoMdDocument />
        </div>
        <p className='text-[18px] font-bold'>
          Transaction Supporting Documents
        </p>
        <div className='text-[30px]'>
          <MdKeyboardArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default FooterDashboard;
