import React from 'react'
import logo from '../assets/images/svg/logo.svg'
import { NAV } from '../utils/helper'
import { CALL } from '../utils/icons'
import Button from './common/Button'
import backgroundImage from '../assets/images/png/header-bg.png'
import award from '../assets/images/png/awards.png'
import tile from '../assets/images/png/tiles.png'
import { COMPANIES_REVIEW } from '../utils/helper'

const Header = () => {
  return (
    <>
      <div className='bg-center bg-cover bg-no-repeat py-6' style={{ backgroundImage: `url(${backgroundImage})` }}>

        <nav>
          <div className='max-w-[1140px] mx-auto px-3 bg-white rounded-3xl p-4 flex items-center justify-between '>
            <img src={logo} alt="logo" />
            <ul className='flex gap-[28px]'>
              {NAV.map((item, index) => {
                return (
                  <div key={index} className=''>
                    <li>
                      <a href="" className='font-normal text-base'>{item.name}</a>
                    </li>
                  </div>
                )
              })}
            </ul>
            <button className='bg-[#FF0000] px-5 py-[14px] rounded-[56px] text-white font-bold text-base flex gap-2.5'>
              <CALL />
              (865) 621-1717
            </button>
          </div>
        </nav>
        <div className='max-w-[1140px] px-3 mx-auto'>
          <h1 className='font-semibold text-[64px] text-white max-w-[830px] w-full mt-[72px] '>Transform Your Space with Precision and Quality:
            Get a Free Quote Today!</h1>
          <p className='font-normal text-lg text-white max-w-[742px] mt-5'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>
          <Button buttonText={"Get a Quote"} buttonClass={'mt-[36px] mb-[72px]'} />
          <div className='flex gap-6 items-center'>
              {COMPANIES_REVIEW.map((item, index) => {
                return (
                  <div key={index} className='px-[8px] py-[16px] bg-white max-w-[228px] rounded-2xl flex gap-[10px]'>
                    <img src={item.image} alt="image" />
                    <div>
                      <p className='font-normal text-[12px] font-manrope'>{item.name}</p>
                      <div className='flex gap-1'>
                        <p className='font-normal text-base font-manrope '>{item.rating}</p>
                        <img src={item.star} alt="star" />
                      </div>
                      <p className='font-normal text-[12px] font-manrope'>{item.data}</p>
                    </div>
                  </div>
                )
              })}
            <img src={tile} alt="tile" className='max-w-[80px] max-h-[80px] w-full' />
            <img src={award} alt="award" className='max-w-[81px] max-h-[80px] w-full' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header