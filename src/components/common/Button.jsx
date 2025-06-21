import React from 'react'

const Button = ({buttonText,buttonClass=""}) => {
    return (

        <button className={`${buttonClass} ${buttonClass} py-5 px-[32px] bg-[#FF0000] rounded-[56px] text-white  font-bold text-lg`}>
            {buttonText}
        </button>
    )
}



export default Button