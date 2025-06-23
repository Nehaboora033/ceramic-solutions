import React from 'react'

const SubHeading = ({ subHeadingClass = "", subheadingText, descriptionText, descriptionClass = "" }) => {
    return (
        <div >
            <p className={`${subHeadingClass} text-[56px] font-semibold font-jakarta `}>{subheadingText}</p>
            <p className={`${descriptionClass} font-normal text-lg font-jakarta leading-[1.6]`}>{descriptionText}</p>
        </div>
    )
}

export default SubHeading