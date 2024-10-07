import './TextImgSection.css';
import React from 'react';

const TextImgSection = React.memo(({customClass, imgSrc, imgAlt, position='center', children}) => {
    return (
        <div className={`TextImgSection ${customClass}`}>
            <div className='TextImgSection-text-container'>
                {children}
            </div>
            <img className={`TextImgSection-img image-${position}`} src={imgSrc} alt={imgAlt} loading='lazy'/>
        </div>
    );
});

export default TextImgSection;
