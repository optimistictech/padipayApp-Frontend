import React from 'react';
import Button from './Button';
import PadiLogo from './PadiLogo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-primary font-primaryFont w-full md:block fixed z-50 text-whiteColor h-18 text-14px'>
      <div className='flex justify-between align-center  items-center py-3 px-10'>
        <div className='flex'>
          <PadiLogo />
        </div>
        <div>
          <ul className='flex md:text-sm lg:text-base'>
            <li>
              <Link to='/' className='md:mx-2 lg:mx-8 hover:text-blue-500'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/aboutus'
                className='md:mx-2 lg:mx-8 hover:text-blue-500'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link to='/blog' className='md:mx-2 lg:mx-8 hover:text-blue-500'>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='/community'
                className='md:mx-2 lg:mx-8 hover:text-blue-500'
              >
                Community
              </Link>
            </li>
            <li>
              <Link to='/' className='md:mx-2 lg:mx-8 hover:text-blue-500'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-3'>
          <div className='border-0'>
            <Link to='/login'>
              <Button text={'Login'}></Button>
            </Link>
          </div>
          <div>
            <div>
              <Link to='/signup'>
                <Button text={'Register Now'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
