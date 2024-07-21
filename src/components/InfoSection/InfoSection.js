import './InfoSection.css';
import Info from './Info/Info';
import { FaCalendar, FaFutbol, FaGift, FaMapMarker } from 'react-icons/fa';

function InfoSection() {
  return (
    <div className='InfoSection'>
        <div className='Info-container'>        
            <FaCalendar/>
            <Info>
                <h3>Dato & Tidspunkt</h3>
                <p>Lørdag d. 2 november</p>
                <p>Kl. 11:00</p>
            </Info>
        </div>
        <div className='Info-container'>        
            <FaMapMarker/>
            <Info>
                <h3>Lokation</h3>
                <p>Ansgarvej 10</p>
                <p>3400 Hillerød</p>
            </Info>
        </div>
        <div className='Info-container'>        
            <FaGift/>
            <Info>
                <h3>Ønskeliste</h3>
                <p>Gaveønsker kan findes på følgenende <a href='https://onskeskyen.dk/da/wishlists/HI1hi6UO9KBGRvT4' target='_blank' rel='noreferrer'>link</a></p>
            </Info>
        </div>
        <div className='Info-container'>        
            <FaFutbol/>
            <Info>
                <h3>Aktiviteter</h3>
                <p>Der vil være hoppeborg, indendørsspil og meget mere, til glæde for både børn og voksne.</p>
            </Info>
        </div>
    </div>
  );
}

export default InfoSection;
