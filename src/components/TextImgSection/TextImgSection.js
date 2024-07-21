import './TextImgSection.css';

function TextImgSection({customClass, imgSrc, imgAlt, imgPosition='center', children}) {
    return (
        <div className={`TextImgSection ${customClass}`}>
            <div className='TextImgSection-text-container'>
                {children}
            </div>
            <img className='TextImgSection-img' src={imgSrc} alt={imgAlt} style={{objectPosition: imgPosition}}/>
        </div>
    );
}

export default TextImgSection;
