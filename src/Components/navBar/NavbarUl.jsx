import React from 'react';
import { Link } from 'react-router-dom';

const NavbarUl = () => {
  return (
    <ul className='flex flex-col lg:flex-row items-center gap-8 md:text-sm lg:text-base'>
      <li>
        <Link to='/' className=' text-slate-50 hover:text-slate-300'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about-us' className=' text-slate-50 hover:text-slate-300'>
          About us
        </Link>
      </li>
      <li>
        <Link to='/blog' className=' text-slate-50 hover:text-slate-300'>
          Blog
        </Link>
      </li>
      <li>
        <Link to='/calculator' className=' text-slate-50 hover:text-slate-300'>
          Calculator
        </Link>
      </li>
      <li>
        <Link to='/contact' className=' text-slate-50 hover:text-slate-300'>
          Contact us
        </Link>
      </li>
    </ul>
  );
};

export default NavbarUl;
