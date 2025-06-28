import React from 'react'
import backgroundImage from '../assets/images/webp/herosection-bg.webp'
import { COMPANIES_REVIEW } from '../utils/helper'
import tile from '../assets/images/png/tiles.png'
import award from '../assets/images/png/awards.png'
import Button from './common/Button'
import Header from './Header'


const HeroSection = () => {
    return (
        <>
            <Header />
            <div className='bg-center bg-cover bg-no-repeat py-6' style={{ backgroundImage: `url(${backgroundImage})` }}>
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
                                )
                            })}
                        </div>
                        <div data-aos="zoom-in" className='flex gap-6'>
                            <img src={tile} alt="tile" className='max-w-[80px] max-h-[80px] w-full' />
                            <img src={award} alt="award" className='max-w-[81px] max-h-[80px] w-full' />
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default HeroSection