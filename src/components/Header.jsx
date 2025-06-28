import React, { useEffect, useState } from 'react'
import logo from '../assets/images/svg/logo.svg'
import { NAV } from '../utils/helper'
import { CALL } from '../utils/icons'
import Button from './common/Button'
import backgroundImage from '../assets/images/png/header-bg.png'
import award from '../assets/images/png/awards.png'
import tile from '../assets/images/png/tiles.png'
import { COMPANIES_REVIEW } from '../utils/helper'

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
    <div className='bg-center bg-cover bg-no-repeat py-6' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav data-aos="zoom-in-down" className={`fixed top-6 w-full z-20 `}>
        <div className={`max-w-[1140px] mx-auto px-3 bg-white rounded-3xl p-4 flex items-center justify-between ${scrolled ? 'shadow-slider' : 'bg-transparent'}`}>
          <img src={logo} alt="logo" className='cursor-pointer' />
          <ul className={`flex gap-[28px] max-lg:justify-center max-lg:items-center max-lg:gap-15 z-9  top-0 max-lg:flex-col lg:flex-row transition-[right] duration-300  max-lg:h-full max-sm:w-full max-lg:w-[75%] max-lg:bg-white max-lg:fixed ${state === "show" ? 'right-0' : 'max-lg:right-[-100%]'}`}>
            {NAV.map((item, index) => {
              return (
                <div key={index}  >
                  <li>
                    <a
                      href="#"
                      className="font-normal text-base font-jakarta transition-all duration-300 ease-in-out hover:text-[#FF0000] " >
                      {item.name}
                    </a>
                  </li>
                </div>
              )})}
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
      <div className='max-w-[1140px] px-3 mx-auto pt-[180px]'>
        <h1 data-aos="fade-down" className='font-semibold md:text-[64px] text-[43px] text-white max-w-[830px] w-full  font-jakarta'>Transform Your Space with Precision and Quality:
          Get a Free Quote Today!</h1>
        <p data-aos="fade-up" className='font-normal md:text-lg text-base text-white max-w-[742px] mt-5 font-jakarta'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>
        <Button buttonText={"Get a Quote"} buttonClass={'mt-[36px] mb-[72px]  '} />
        <div className='flex gap-6  md:flex-row flex-col '>
          <div className='flex flex-row max-[500px]:flex-col gap-6'>
            {COMPANIES_REVIEW.map((item, index) => {
              return (
                <div key={index} data-aos="zoom-in" className='px-4 max-w-[229px] pt-[8.33px] pb-[6px]  bg-white rounded-2xl flex gap-[10px]'>
                  <img src={item.image} alt="image" className='size-[40px] block my-auto' />
                  <div>
                    <p className='font-normal text-[12px] font-manrope whitespace-nowrap '>{item.name}</p>
                    <div className='flex gap-1'>
                      <p className='font-normal text-base font-manrope '>{item.rating}</p>
                      <img src={item.star} alt="star" />
                    </div>
                    <p className='font-normal text-[12px] font-manrope whitespace-nowrap'>{item.data} </p>
                  </div>
                </div>
              ) })}
          </div>
          <div data-aos="zoom-in" className='flex gap-6'>
            <img src={tile} alt="tile" className='max-w-[80px] max-h-[80px] w-full' />
            <img src={award} alt="award" className='max-w-[81px] max-h-[80px] w-full' />
          </div>
        </div>
      </div>
    </div>
  )}

export default Header