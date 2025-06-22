import React from 'react'

const SubHeading = ({ subHeading = "", subheadingText, descriptionText, description = "" }) => {
    return (
        <div >
            <p className={`${subHeading} text-[56px] font-semibold font-jakarta `}>{subheadingText} </p>
            <p className={`${description} font-normal text-lg font-jakarta leading-[1.6]`}>{descriptionText}</p>
        </div>
    )
}

export default SubHeading