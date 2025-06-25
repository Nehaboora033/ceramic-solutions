import React from 'react'
import logo from '../assets/images/svg/footer-logo.svg'
import email from '../assets/images/svg/email.svg'
import call from '../assets/images/svg/call.svg'
import { FOOTER_LINKS, HANDLE } from '../utils/helper'
import Button from './common/Button'


const Footer = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 mt-[120px] '>
                <div className='flex justify-between min-[1050px]:flex-row flex-col min-[1050px]:gap-0 gap-7'>
                    <div>
                        <img src={logo} alt="logo" />
                        <div className='flex gap-2 mt-5'>
                            <img src={email} alt="svg" />
                            <a href="mailto:help@Dealzip.com" className='font-normal text-base font-jakarta'>help@Dealzip.com </a>
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <img src={call} alt="svg" />
                            <p className='font-normal text-base font-jakarta'>+1 234 456 678 89</p>
                        </div>
                        <div className='flex gap-2 mt-4 '>
                            {HANDLE.map((item, index) => (
                                <a  href="" key={index} className='hover:-translate-y-1'>
                                    <img  src={item.image} alt="image" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='flex min-[850px]:flex-row flex-col min-[850px]:gap-[76px] gap-5  max-w-[832px] w-full'>
                        <div className='flex min-[450px]:gap-[76px] gap-[35px]  '>
                            {FOOTER_LINKS.map((item, index) => (
                                <div key={index} className=''>
                                    <ul>
                                        <li className='font-semibold min-[370px]:text-xl text-lg font-jakarta capitalize mb-5 text-[#1C2329]'>
                                            {item.name}
                                        </li>
                                        {item.link.map((link, i) => (
                                            <li key={i} className='mb-3'>
                                                <a href="#" className="relative transition-all duration-300 ease-in-out hover:text-[#FF0000] font-jakarta font-normal min-[370px]:text-base text-sm  whitespace-nowrap">{link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* newletter part  */}
                        <div>
                            <p className='font-semibold  min-[370px]:text-xl text-lg   font-jakarta capitalize'>Newsletter</p>
                            <p className='mt-5'><a href="" className='font-normal min-[370px]:text-base text-sm  font-jakarta capitalize relative transition-all duration-300 ease-in-out hover:text-[#FF0000]'>Stay up to date</a></p>
                            <label for="email" className='relative'>
                                <input type="email" id="email" placeholder='Your email' className='sm:max-w-[340px] max-w-[300px] mt-3 rounded-[62px] pl-4 sm:pr-[182px] pr-[160px]  h-[74px] border border-[#D9D9D9] placeholder:text-[#81848A]' />
                                <Button buttonText={"Subscribe"} buttonClass='py-[16px] px-[40px] font-semibold max-w-[140px] sm:max-w-[160px] text-noraml absolute top-1/2 right-[10px] -translate-y-1/2 ' />
                            </label>
                        </div>
                    </div>

                </div>
            </div>
            {/* Copyright */}
            <div>

                <div className="bg-[linear-gradient(90deg,_rgba(22,22,22,0)_0%,_#696969_51.56%,_rgba(22,22,22,0)_100%)] h-[1px] w-full mt-[45px]" />
                <div className='py-4'>
                    <p className='font-normal text-base text-center text-[#1B2228]'>Copyright 2024 ceramicsolutions.com all rights reserved</p>
                </div>
            </div>


        </>
    )
}

export default Footer