import React, { useState } from 'react'
import SubHeading from './common/SubHeading'
import { FAQ_DATA } from '../utils/helper'
import { FAQ_ARROW } from '../utils/icons'

const FAQ = () => {
    const [isOpen, SetIsOpen] = useState(null);
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3 mb-[140px]'>
                <SubHeading subheadingText={"Frequently Asked Questions"} subHeadingClass='text-center' descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade"} descriptionClass='mt-5 max-w-[592px] text-center mx-auto mb-[56px]' />
                <div className='flex flex-col items-center'>
                    {FAQ_DATA.map((item, index) => (
                        <div data-aos="zoom-in-up" key={index} className='max-w-[912px] rounded-2xl  sm:p-5 p-4 mb-6 shadow-slider transition-all duration-150'>
                            <button onClick={() => SetIsOpen(isOpen===index?null:index)} className={`flex justify-between w-full cursor-pointer font-normal gap-2.5 text-lg font-jakarta items-center text-start`}>
                               {item.question}
                                <span className={`${isOpen === index ? "rotate-180" : "rotate-0"}`}><FAQ_ARROW/> </span>
                            </button>
                            <p className={`font-normal text-base  font-jakarta overflow-hidden transition-all duration-200 ease-in-out ${isOpen===index?"max-h-[250px] pt-3":"max-h-0"}`}>{item.answer} </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQ