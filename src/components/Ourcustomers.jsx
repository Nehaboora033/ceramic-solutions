import React from 'react'
import SubHeading from './common/SubHeading'
import { COMPANIES_REVIEW } from '../utils/helper'
import Slider from "react-slick";
import { CUSTOMER_SLIDER } from '../utils/helper'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Ourcustomers = () => {
    const settings = {
        dots: false,
        speed: 400,
        slidesToShow: 3.6,
        sliddesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 1180, //max-width:1180px
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024, //max-width:1024px
                settings: {
                    slidesToShow: 2.5,
                },
            },
            {
                breakpoint: 768,  //max-width:768px
                settings: {
                    slidesToShow: 2.2,
                },
            },
            {
                breakpoint: 640,   //max-width:640px
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 540,   //max-width:640px
                settings: {
                    slidesToShow: 1.5,
                },
            },
            {
                breakpoint: 500,   //max-width:640px
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

    };
    return (
        <>
            <div className='mx-w-[1140px] px-3 mx-auto mt-[140px]'>
                <SubHeading subheadingText={"What Our Customers Say"} subHeadingClass='text-center' descriptionText={"Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade"} descriptionClass='max-w-[641px] w-full text-center mx-auto mt-5' />
                <div className='flex gap-6 justify-center mt-8 min-[440px]:flex-row flex-col items-center'>
                    {COMPANIES_REVIEW.map((item, index) => {
                        return (
                            <div data-aos="zoom-in" key={index} className='px-4 max-w-[229px] pt-[8.33px] pb-[6px]  bg-white rounded-2xl flex gap-[10px] border-[0.83px] border-[#DCDCDC]'>
                                <img src={item.image} alt="image" className='size-[40px] block my-auto' />
                                <div>
                                    <p className='font-normal text-[12px] font-manrope whitespace-nowrap '>{item.name}</p>
                                    <div className='flex gap-1'>
                                        <p className='font-normal text-base font-manrope '>{item.rating}</p>
                                        <img src={item.star} alt="star" />
                                    </div>
                                    <p className='font-normal text-[12px] font-manrope whitespace-nowrap'>{item.data} </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>


            <Slider {...settings} >
                {CUSTOMER_SLIDER.map((item, index) => (
                    <div key={index} className='p-6 rounded-3xl shadow-slider my-[56px] '>
                        <div className='flex gap-2'>
                            <img src={item.image} alt="profile" />
                            <div>
                                <p className='font-semibold text-base font-manrope'>{item.name} </p>
                                <p className='font-normal text-sm font-manrope'>{item.profession} </p>
                            </div>
                        </div>
                        <img src={item.rating} alt="rating" className='my-4' />
                        <p className='font-normal text-base font-manrope '>"{item.about}"</p>
                    </div>
                ))}
            </Slider>

        </>
    )
}

export default Ourcustomers

// data - aos="fade-left"