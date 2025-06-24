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
                <div className='flex justify-between'>
                    <div>
                        <img src={logo} alt="logo" />
                        <div className='flex gap-2 mt-5'>
                            <img src={email} alt="svg" />
                            <a href="mailto:help@Dealzip.com">help@Dealzip.com </a>
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <img src={call} alt="svg" />
                            <p className='font-normal text-base font-jakarta'>+1 234 456 678 89</p>
                        </div>
                        <div className='flex gap-2 mt-4 '>
                            {HANDLE.map((item, index) => (
                                <a href="" key={index} className='hover:translate-y-1'>
                                    <img src={item.image} alt="image" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='flex gap-[76px] max-w-[832px]'>
                        {FOOTER_LINKS.map((item, index) => (
                            <div key={index} className=''>
                                <ul>
                                    <li className='font-semibold text-xl font-jakarta capitalize mb-5 text-[#1C2329]'>
                                        {item.name}
                                    </li>
                                    {item.link.map((link, i) => (
                                        <li key={i} className='mb-3'>
                                            <a
                                                href="#"
                                                className="relative inline-block text-transparent bg-gradient-to-r from-[#1B2228] to-[#1B2228] bg-clip-text transition-all duration-500 ease-in-out hover:from-[#FF0000] hover:to-[#FF0000]"
                                            >
                                                {link}
                                            </a>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        {/* newletter part  */}
                        <ul>
                            <li className='font-semibold text-xl font-jakarta capitalize'>Newsletter</li>
                            <li className='font-normal text-base font-jakarta capitalize mt-5'>Stay up to date</li>
                            <div className='relative mt-3'>
                                <input type="email" placeholder='Your email' className='max-w-[340px] rounded-[62px] pl-4 pr-[182px]  h-[74px] border border-[#D9D9D9] placeholder:text-[#81848A]' />
                                <Button buttonText={"Subscribe"} buttonClass='py-[16px] px-[40px] font-semibold max-w-[160px] text-noraml absolute right-[9px] top-[7px]' />
                            </div>
                        </ul>
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