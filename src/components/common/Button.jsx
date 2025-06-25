import React from 'react'

const Button = ({buttonText,buttonClass=""}) => {
    return (

        <button data-aos="fade-up" data-aos-delay="200" className={`${buttonClass} hover:scale-105 py-5 px-[32px] cursor-pointer font-jakarta bg-[#FF0000] rounded-[56px] text-white  font-bold md:text-lg text-base`}>
            {buttonText}
        </button>
    )
}



export default Button