import React, { useState } from 'react';
import Logo from '../../public/assets/logo.png';
import Play from '../../public/assets/playnow.png';
import Menu from '../../public/assets/menu.png';
import Image from 'next/image';

const Navbar = () => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='flex space-x-7'>
            <div>
              {/* Website Logo */}
              <a href='#' className='flex items-center py-4 px-2'>
                <span className='h-16 w-16 mr-2 transform hover:scale-110 duration-300'>
                  <Image src={Logo} alt='Logo' />
                </span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className='hidden md:flex items-center space-x-1'>
              <a
                href=''
                className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
              >
                Contract Address
              </a>
              <a
                href=''
                className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
              >
                Whitepaper
              </a>
              <a
                href=''
                className='py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300'
              >
                Our Team
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className='hidden md:flex items-center space-x-3 '>
            <a
              href=''
              className='py-2 px-2 transform hover:scale-110 duration-300'
            >
              <Image src={Play} alt='playnow' />
            </a>
          </div>
          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <span className='mobile-menu-button cursor-pointer'>
              <Image src={Menu} alt='menu' onClick={handleToggle} />
            </span>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`mobile-menu ${isActive ? 'hidden' : null}`}>
        <ul className='space-y-12 space-x-48'>
          <li>
            <a href='#' className='block text-sm px-2 py-4 hover:bg-green-500'>
              Contract Address
            </a>
          </li>
          <li>
            <a
              href='#'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              Whitepaper
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='block text-sm px-2 py-4 hover:bg-green-500 transition duration-300'
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href=''
              className='py-2 px-2 transform hover:scale-110 duration-300'
            >
              <Image src={Play} alt='playnow' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
