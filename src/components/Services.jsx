import React from 'react'
import SubHeading from './common/SubHeading'
import { DATA, SERVICES_DATA } from '../utils/helper'


const Services = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto'>

                <SubHeading subheadingText={"We provide services in these areas"} subHeadingClass='max-w-[592px]' descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade"} descriptionClass='mt-5 max-w-[592px] mb-[56px]' />
                <div className='grid grid-cols-3 gap-6'>
                    {Array(6).fill(null).flatMap((_, repeatIndex) =>
                        SERVICES_DATA.map((item, index) => {
                            const Icon = item.svg;
                            return (
                                <div key={`${repeatIndex}-${index}`} className='rounded-3xl shadow-slider p-6 w-full'>
                                    <div className='flex gap-3 items-center'>
                                        <div className='bg-[#FF0000] rounded-[50%] size-[48px] p-2 flex items-center justify-center'>
                                            <Icon />
                                        </div>
                                        <p className='font-semibold text-2xl font-jakarta'>{item.location}</p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className='flex gap-6 mt-6 justify-center '>
                    {DATA.map((item, index) => (
                        <div key={index} className='rounded-3xl shadow-slider p-6 w-full max-w-[364px]'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#FF0000] rounded-[50%] size-[48px] p-2 flex items-center justify-center'>
                                    <item.svg />
                                </div>
                                <p className='font-semibold text-2xl font-jakarta'>{item.location}</p>
                            </div>
                        </div>
                    )
                    )
                    }
                </div>
            </div>


        </>
    )
}

export default Services