import React from "react";
import Button from "./Button";
import PadiLogo from "./PadiLogo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='bg-primary w-full md:block fixed z-50 text-whiteColor h-18 text-14px'>
      <div className='max-w-[1400px] mx-auto flex justify-between align-center  items-center py-3 px-10'>
    
        <div className='flex'>
          <PadiLogo />
        </div>
        <div>
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
            {/* <li>
              <Link
                to='/community'
                className='md:mx-2 lg:mx-8 text-slate-50 hover:text-slate-300'

              

              >
                Calculator
              </Link>
            </li> */}
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
        <div className='flex gap-3'>
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
      </div>
    </nav>
  );
};

export default Navbar;
