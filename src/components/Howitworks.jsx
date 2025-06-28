import React from 'react'
import image from '../assets/images/webp/how-image.webp'
import SubHeading from './common/SubHeading'
import { HOW_IT_WORKS_DATA } from '../utils/helper'
import Button from './common/Button' 

const Howitworks = () => {
    return (
            <div className='max-w-[1140px] px-3 mx-auto mt-[140px] '>
                <div className='flex mx-[-12px] items-center gap-6 min-[970px]:gap-0  justify-between min-[970px]:flex-row flex-col '>
                    <div className='min-[970px]:w-[45%] w-full px-3'>
                        <img data-aos="fade-up-right" src={image} alt="image" className='block mx-auto' />
                    </div>
                    <div className='min-[970px]:w-[51%] w-full px-3'>
                        <SubHeading subheadingText={"How it works?"}  descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. "} descriptionClass='min-[970px]:max-w-[592px] w-full mt-5 mb-8' />
                        {HOW_IT_WORKS_DATA.map((item, index) => (
                            <div data-aos="zoom-in-up"  key={index} className='p-4 shadow-how mb-4 rounded-3xl'>
                                <div className='flex gap-5'>
                                    <span className='size-[32px]'><item.image /></span>
                                    <div>
                                        <p className='font-semibold text-xl font-jakarta mb-3'>{item.heading} </p>
                                        <p className='font-jakarta text-base font-normal'>{item.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='flex gap-6 mt-9 min-[410px]:flex-row flex-col'>
                            <Button buttonText={"Get a Quote"}  />
                            <Button buttonText={"View Tile Visualizer"} buttonClass='!bg-white !text-[#FF0000] border-[#FF0000] border '  />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Howitworks