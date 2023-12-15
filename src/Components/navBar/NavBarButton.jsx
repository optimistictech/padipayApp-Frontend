import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const NavBarButton = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row mt-8 lg:mt-0 gap-3 '>
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
        <Link to='/account-type'>
          <Button text='Register Now' />
        </Link>
      </div>
    </div>
  );
};

export default NavBarButton;
