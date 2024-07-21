import './Footer.css';

function Footer({children}) {
  return (
    <div className='Footer'>
        <div className='container'>
            {children}
        </div>
    </div>
  );
}

export default Footer;
