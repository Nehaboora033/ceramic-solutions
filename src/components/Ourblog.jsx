import React from 'react'
import SubHeading from './common/SubHeading'
import pointer from '../assets/images/svg/pointer.svg'
import { OUR_BLOG_DATA } from '../utils/helper'

const Ourblog = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto my-[140px]'>
                <SubHeading subheadingText={"Our Blog"} subHeadingClass='text-center' descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade"} descriptionClass='max-w-[592px] text-center mx-auto mt-5 mb-[56px]' />
                <div  className='grid min-[890px]:grid-cols-3 min-[650px]:grid-cols-2 gap-6'>
                    {[...Array(3)].map((_, index) => (
                        <div data-aos="zoom-in" key={index} className='rounded-3xl p-6 w-full shadow cursor-pointer hover:scale-102'>
                            <img src={OUR_BLOG_DATA[0].image} alt="image" className='w-full' />
                            <p className='font-semibold text-2xl font-jakarta mt-6 mb-4'>{OUR_BLOG_DATA[0].heading}</p>
                            <div className='flex gap-2.5 items-center'>
                                <a href="" className='text-[#FF0000] font-semibold text-base font-jakarta'>{OUR_BLOG_DATA[0].link}</a>
                                <a href=""><img src={pointer} alt="pointer" /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Ourblog