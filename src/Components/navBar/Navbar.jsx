import React, { useState } from 'react';
import Button from '../Button';
import PadiLogo from '../PadiLogo';
import { Link } from 'react-router-dom';
import NavbarUl from './NavbarUl';
import { MdOutlineMenu } from 'react-icons/md';
import MobileNavBar from './MobileNavBar';
import NavBarButton from './NavBarButton';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className='flex justify-between items-center bg-primary w-full md:block fixed z-50 text-whiteColor h-18 text-14px'>
      <div className='  flex flex-row justify-between  align-center items-center py-3 px-10'>
        <div>
          <PadiLogo />
        </div>
        {/* menus */}

        <div className='hidden lg:flex'>
          <NavbarUl />
        </div>

        {/* buttons */}
        <div className='hidden lg:flex'>
          <NavBarButton />
        </div>
      </div>

      {/* handburger */}
      <div onClick={() => setMobileNav(!mobileNav)} className='lg:hidden'>
        <MdOutlineMenu />
        <MobileNavBar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
