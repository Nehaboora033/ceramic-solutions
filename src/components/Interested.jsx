import React from 'react'
import image from '../assets/images/png/interested-image.png'
import SubHeading from './common/SubHeading'
import Button from './common/Button'

const Interested = () => {
    return (
            <div className='max-w-[1164px] mx-auto px-3 mt-[140px] '>
                <div className='max-w-[1140px] py-[64px] bg-no-repeat bg-center bg-cover rounded-3xl  relative after:absolute after:w-full after:h-full after:top-0 after:content-[""] after:bg-[#FF0000BF] after:rounded-3xl flex flex-col' style={{ backgroundImage: `url(${image})` }}>

                    <SubHeading subheadingText={<>Interested? <br /> Get in touch with us</>} descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. "} subHeadingClass='text-white relative z-[1] text-center ' descriptionClass='text-white max-w-[592px] mx-auto text-center relative z-[1] mt-5' />
                    <Button buttonText={"Get a Quote"} buttonClass='bg-white !text-[#FF0000] max-w-[173px] mx-auto flex z-[1] mt-9' />
                </div>
            </div>
    )
}

export default Interested