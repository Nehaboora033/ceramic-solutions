import React from 'react'
import SubHeading from './common/SubHeading'
import { WHY_CHOOSE_US_DATA } from '../utils/helper'
import image from '../assets/images/png/chooseus-img.png'
import Button from './common/Button'


const whychooseus = () => {
    return (
        <>
            <div className='bg-[#FFEBEB] py-[100px]'>
                <div className='max-w-[1140px] px-3 mx-auto'>
                    <div className='flex min-[970px]:flex-row flex-col-reverse ml-[-12px] mr-[-12px] items-center min-[970px]:gap-0 gap-6'>
                        <div className='min-[970px]:w-1/2 w-full px-3'>
                            <SubHeading subheadingText={"Why Choose us?"}  descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. "} descriptionClass='mt-5 mb-[32px] max-w-[590px] w-full ' />
                            <div className='flex flex-col gap-6'>
                                {WHY_CHOOSE_US_DATA.map((item, index) => (
                                    <div key={index} className='flex gap-5'>
                                        <div data-aos="zoom-out-right" className='max-w-[62px] max-h-[62px] w-full rounded-[10px] bg-[#F7D3D4] p-[15px] mb-6'>
                                            <item.svg />
                                        </div>
                                        <div data-aos="zoom-out-left">
                                            <p className='font-semibold text-xl font-jakarta'>{item.heading} </p>
                                            <p className='font-noraml text-base font-jakarta mt-3 min-[970px]:max-w-[370px] w-full'>{item.description} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button buttonText={"Get a Quote"} buttonClass='mt-9' />
                        </div>
                        <div className='min-[970px]:w-1/2 w-full px-3'>
                            <img data-aos="fade-up-left" src={image} alt="image" className='block mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default whychooseus