import React from 'react'

const Button = ({buttonText,buttonClass=""}) => {
    return (

        <button className={`${buttonClass} py-5 px-[32px] cursor-pointer font-jakarta bg-[#FF0000] rounded-[56px] text-white  font-bold md:text-lg text-base`}>
            {buttonText}
        </button>
    )
}



export default Button