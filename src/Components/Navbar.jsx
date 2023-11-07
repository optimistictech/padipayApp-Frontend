import React from 'react';
import Button from './Button';
import PadiLogo from './PadiLogo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='bg-primary w-full md:block fixed z-50 text-whiteColor h-18 text-14px'>
      <div className='flex justify-between align-center  items-center py-3 px-10'>
        <div className='flex'>
          <PadiLogo />
        </div>
        <div>
          <ul className='flex md:text-sm lg:text-base'>
            <li>
              <Link to='/' className='md:mx-2 lg:mx-8'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/aboutus' className='md:mx-2 lg:mx-8'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/blog' className='md:mx-2 lg:mx-8'>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/community' className='md:mx-2 lg:mx-8'>
                Community
              </Link>
            </li>
            <li>
              <Link to='/' className='md:mx-2 lg:mx-8'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-3'>
          <div>
            <button className='text-white px-3 py-2'>
              <Link to='login'>Login</Link>
            </button>
          </div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar