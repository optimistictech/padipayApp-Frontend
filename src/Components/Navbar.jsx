import React from 'react';
import Button from './Button';
import PadiLogo from './PadiLogo';

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
              <a href='index.html' className='md:mx-2 lg:mx-8'>
                Home
              </a>
            </li>
            <li>
              <a href='/' className='md:mx-2 lg:mx-8'>
                About Us
              </a>
            </li>
            <li>
              <a href='/' className='md:mx-2 lg:mx-8'>
                Blog
              </a>
            </li>
            <li>
              <a href='/' className='md:mx-2 lg:mx-8'>
                Community
              </a>
            </li>
            <li>
              <a href='/' className='md:mx-2 lg:mx-8'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='flex gap-3'>
          <div>
            <button className='text-white px-3 py-2'>
              <a href=''>Login</a>
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

export default Navbar;
