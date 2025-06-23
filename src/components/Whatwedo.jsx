import React from 'react'
import { WHAT_WE_DO_DATA } from '../utils/helper'
import SubHeading from './common/SubHeading'
import pointer from '../assets/images/svg/pointer.svg'

const Whatwedo = () => {
    return (
        <>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className='pt-[174px] pb-[140px] '>
                    <SubHeading subheadingText={"What we do"} subHeadingClass='text-center mb-[56px]' />
                    <div className='grid grid-cols-3 gap-6'>
                        {WHAT_WE_DO_DATA.map((item, index) => {
                            return (
                                <div key={index} className='max-w-[364px] max-h-[470px] rounded-3xl border border-[#E0E0E0] p-6  hover:shadow hover:border-0'>
                                    <img src={item.image} alt="image" />
                                    <p className='font-semibold text-2xl font-jakarta mt-6 mb-3 '>{item.name}</p>
                                    <p className='font-normal text-base mb-6'>{item.description} </p>
                                    <div className='flex items-center gap-2.5'>
                                        <a href="" className={'text-base font-semibold text-[#FF0000] font-jakarta whitespace-nowrap'}>{item.link} </a>
                                        <a href=""><img src={pointer} alt="pointer" /></a>
                                    </div>
                                </div>
                            )})}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whatwedo