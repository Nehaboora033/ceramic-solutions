import React from 'react'

const SubHeading = ({ subHeadingClass = "", subheadingText, descriptionText, descriptionClass = "" }) => {
    return (
        <div >
            <p data-aos="fade-down" className={`${subHeadingClass} sm:text-[56px] text-[45px] font-semibold font-jakarta `}>{subheadingText}</p>
            <p data-aos="fade-up" className={`${descriptionClass} font-normal sm:text-lg text-base font-jakarta leading-[1.6]`}>{descriptionText}</p>
        </div>
    )
}

export default SubHeading