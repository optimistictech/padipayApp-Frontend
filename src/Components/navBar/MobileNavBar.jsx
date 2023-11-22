import React from 'react';
import NavbarUl from './NavbarUl';
import NavBarButton from './NavBarButton';
import { IoMdClose } from 'react-icons/io';

const MobileNavBar = ({ mobileNav, setMobileNav }) => {
  return (
    <div>
      {mobileNav ? (
        <div className='bg-primary fixed h-full w-full top-0 left-0 z-10'></div>
      ) : (
        ''
      )}
      <div
        className={
          mobileNav
            ? 'fixed top-0 left-0 w-[100%] h-full z-10 bg-transparent duration-500'
            : 'fixed top-0 left-[-100%] h-full bg-primary duration-500 z-10'
        }
      >
        <button onClick={() => setMobileNav(!mobileNav)}>
          <IoMdClose />
        </button>
        <nav className='flex flex-col justify-center items-center '>
          <NavbarUl />
          <NavBarButton />
        </nav>
      </div>
    </div>
  );
};

export default MobileNavBar;
