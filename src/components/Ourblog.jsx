import React from 'react'
import SubHeading from './common/SubHeading'
import { OUR_BLOG_DATA } from '../utils/helper'
import pointer from '../assets/images/svg/pointer.svg'

const Ourblog = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto my-[140px]'>
                <SubHeading subheadingText={"Our Blog"} subHeadingClass='text-center' descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade"} descriptionClass='max-w-[592px] text-center mx-auto mt-5 mb-[56px]' />
                <div className='flex gap-6'>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className='rounded-3xl p-6 max-w-[364px] w-full shadow cursor-pointer hover:scale-102'>
                            <img src={OUR_BLOG_DATA[0].image} alt="image" />
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