import React from 'react'

const IconButton = ({imgSrc, text}) => {
    
    return (
        <div>
            <img src={imgSrc} />
            <span>{text}</span>
        </div>
    );
    
}

export default IconButton;
