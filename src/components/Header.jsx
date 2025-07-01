import React, { useEffect, useState } from 'react'
import logo from '../assets/images/svg/logo.svg'
import { NAV } from '../utils/helper'
import { CALL } from '../utils/icons'

const Header = () => {
  const [state, setIsOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  //scrolled effect 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav  className={`fixed top-6 w-full z-20 `}>
      <div className={`max-w-[1140px] mx-auto px-3 bg-white rounded-3xl p-4 flex items-center justify-between ${scrolled ? 'shadow-slider' : 'bg-transparent'}`}>
        <img src={logo} alt="logo" className='cursor-pointer' />
        <ul className={`flex gap-[28px] max-lg:justify-center max-lg:items-center max-lg:gap-15 z-9  top-0 max-lg:flex-col lg:flex-row transition-[right] duration-300  max-lg:h-full max-sm:w-full max-lg:w-[75%] max-lg:bg-white max-lg:fixed ${state === "show" ? 'right-0' : 'max-lg:right-[-100%]'}`}>
          {NAV.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="font-normal text-base font-jakarta transition-all duration-300 ease-in-out hover:text-[#FF0000] " >
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
        <div className='flex items-center gap-3'>
          <button data-aos="fade-up" className='bg-[#FF0000] hover:scale-105 px-5 py-[14px] whitespace-nowrap  max-sm:w-[50px] max-sm:h-[50px] max-sm:p-0 max-sm:flex max-sm:items-center max-sm:justify-center max-w-[186px] rounded-[50%] sm:rounded-[56px] text-white font-bold text-base flex gap-2.5 cursor-pointer'>
            <CALL />
            <span className='max-sm:hidden'>(865) 621-1717</span>
          </button>
          <button onClick={() => setIsOpen(state === "show" ? null : "show")}
            className='w-[42px] h-[35px]  z-10 flex flex-col justify-between lg:hidden '>
            <span className={`h-1 w-full bg-[#FF0000] rounded-[50px] transition-all duration-200 ${state === "show" ? 'rotate-[45deg] origin-left' : ''}`}></span>
            <span className={`h-1 w-full bg-[#FF0000] rounded-[50px] transition-all duration-200 ${state === "show" ? 'hidden' : ''}`}></span>
            <span className={`h-1 w-full bg-[#FF0000] rounded-[50px] transition-all duration-200 ${state === "show" ? 'rotate-[-45deg] origin-left' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header