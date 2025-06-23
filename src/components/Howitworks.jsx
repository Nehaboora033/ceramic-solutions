import React from 'react'
import image from '../assets/images/png/how-image.png'
import SubHeading from './common/SubHeading'
import { HOW_IT_WORKS_DATA } from '../utils/helper'
import Button from './common/Button' 

const Howitworks = () => {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto my-[140px] '>
                <div className='flex flex-wrap mx-[-12px]'>
                    <div className='w-1/2 px-3'>
                        <img src={image} alt="image" />
                    </div>
                    <div className='w-1/2 px-3'>
                        <SubHeading subheadingText={"How it works?"} descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. "} descriptionClass='max-w-[592px] mt-5 mb-8' />
                        {HOW_IT_WORKS_DATA.map((item, index) => (
                            <div key={index} className='max-w-[592px] p-4 shadow-how mb-4 rounded-3xl'>
                                <div className='flex gap-5'>
                                    <span className='size-[32px]'><item.image /></span>
                                    <div>
                                        <p className='font-semibold text-xl font-jakarta mb-3'>{item.heading} </p>
                                        <p className='font-jakarta text-base font-normal'>{item.description} </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='flex gap-6 mt-9'>
                            <Button buttonText={"Get a Quote"} />
                            <Button buttonText={"View Tile Visualizer"} buttonClass='!bg-white !text-[#FF0000] border-[#FF0000] border '  />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Howitworks