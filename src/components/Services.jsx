import React from 'react'
import SubHeading from './common/SubHeading'
import { DATA, SERVICES_DATA } from '../utils/helper'


const Services = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <SubHeading subheadingText={"We provide services in these areas"} subHeadingClass='max-w-[592px]' descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade"} descriptionClass='mt-5 max-w-[592px] mb-[56px]' />
                <div className='grid min-[850px]:grid-cols-3 min-[580px]:grid-cols-2 gap-6'>
                    {Array(6).fill(null).flatMap((_, repeatIndex) =>
                        SERVICES_DATA.map((item, index) => {
                            const Icon = item.svg;
                            return (
                                <div data-aos="zoom-in" key={`${repeatIndex}-${index}`} className='rounded-3xl shadow-slider p-6 w-full'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='bg-[#FF0000] rounded-[50%] size-[48px] p-2 flex items-center justify-center'>
                                            <Icon />
                                        </div>
                                        <p className='font-semibold min-[425px]:text-2xl text-lg font-jakarta'>{item.location}</p>
                                    </div>
                                </div>
                            );
                        }))}
                </div>
                <div className='flex gap-6 mt-6 justify-center min-[580px]:flex-row flex-col '>
                    {DATA.map((item, index) => (
                        <div data-aos="zoom-in" key={index} className='rounded-3xl shadow-slider p-6 w-full min-[850px]:max-w-[364px]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#FF0000] rounded-[50%] size-[48px] p-2 flex items-center justify-center'>
                                    <item.svg />
                                </div>
                                <p className='font-semibold min-[425px]:text-2xl text-lg font-jakarta'>{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Services