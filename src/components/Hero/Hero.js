import './Hero.css';

function Hero({heroImgSrc, heroImgAlt, children}) {
    return (
        <div className='Hero'>
            <img className='Hero-img' src={heroImgSrc} alt={heroImgAlt} />
            <div className='Hero-overlay'></div>
            <div className='Hero-content'>
                {children}
            </div>
        </div>
    );
}

export default Hero;
