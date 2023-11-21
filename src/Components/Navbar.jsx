import React from 'react';
import Button from './Button';
import PadiLogo from './PadiLogo';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-primary w-full md:block fixed z-50 text-whiteColor h-18 text-14px'>
      <div className='max-w-[1400px]  mx-auto flex flex-row justify-between align-center items-center py-3 px-10'>
        <div>
          <PadiLogo />
        </div>
        {/* menus */}

        <div className=''>
          <ul className='flex md:text-sm lg:text-base'>
            <li>
              <Link
                to='/'
                className='md:mx-2 lg:mx-8 text-slate-50 hover:text-slate-300'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about-us'
                className='md:mx-2 lg:mx-8 text-slate-50 hover:text-slate-300'
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to='/blog'
                className='md:mx-2 lg:mx-8 text-slate-50 hover:text-slate-300'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='/calculator'
                className='md:mx-2 lg:mx-8 text-slate-50 hover:text-slate-300'
              >
                Calculator
              </Link>
            </li>
            <li>
              <Link
                to='/contact-us'
                className='md:mx-2 lg:mx-8 text-slate-50 hover:text-slate-300'
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* buttons */}
        <div className='lg:flex gap-3 hidden'>
          <div className='border-0'>
            <Link to='/login'>
              <Button
                className='hover:bg-transparent hover:text-slate-300'
                text='Login'
                noborder
              ></Button>
            </Link>
          </div>
          <div>
            <Link to='/signup'>
              <Button text='Register Now' />
            </Link>
          </div>
        </div>

        {/* handburger */}
        <div className='lg:hidden'>
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
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
