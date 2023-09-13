import React, { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Navigation for larger devices */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-monserrat leading-normal text-xl text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-8 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Sign up</a>
        </div>

        {/* Mobile navigation */}
        <div className='relative lg:hidden px-11'>
          <img 
            src={hamburger} 
            alt="Hamburger" 
            width={25} 
            height={25}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
          {isMobileMenuOpen && (
            <div className="absolute top-full mt-2 w-60 bg-white shadow-xl rounded-lg overflow-hidden transition-all transform translate-x-[-50%] left-[50%] opacity-100 scale-100"
                 style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}>
              <ul className="flex flex-col space-y-2 p-4 divide-y divide-gray-200">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className='font-monserrat leading-normal font-semibold text-lg text-slate-gray block py-2 hover:bg-gray-100'>
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4">
                  <a href='/' className='font-monserrat leading-normal text-lg block  py-2 hover:bg-gray-200 font-semibold'>Sign in</a>
                </li>
                
                <li>
                  <a href='/' className='font-monserrat leading-normal text-lg  block py-2 hover:bg-gray-200
                   font-semibold'>Sign up</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Nav;
