import React from 'react';

// Components
import Hero from './components/Hero/Hero';
import TextImgSection from './components/TextImgSection/TextImgSection';
import InfoSection from './components/InfoSection/InfoSection';
import GallerySection from './components/GallerySection/GallerySection';
import ParallaxImgSection from './components/ParallaxImgSection/ParallaxImgSection';
import Footer from './components/Footer/Footer';

// Images
//TODO: Figure out a better way to do this.
import heroImg from './img/family-photo-mateo-looking-at-lenora.webp';
import lenoraCherryDress from './img/lenora-cherry-dress.webp';
import andrewAndTerese from './img/andrew-and-terese.webp';
import lenoraOnTheBeach from './img/lenora-on-the-beach.webp';
import lenoraFunnyHandGesture from './img/lenora-funny-hand-gesture.webp';
import lenoraLayingWithHerKneesUpHigh from './img/lenora-laying-with-her-knees-up-high.webp';
import lenoraOnHerBelly from './img/lenora-on-her-belly-hands-folded.webp';
import lenoraOnHerBellyHandToHerChin from './img/lenora-on-her-belly-hand-to-her-chin.webp';
import lenoraBeigeDress from './img/lenora-beige-dress.webp';

const images = [
    lenoraOnTheBeach,
    lenoraOnHerBelly,
    lenoraBeigeDress,
    lenoraLayingWithHerKneesUpHigh,
    lenoraFunnyHandGesture,
    lenoraOnHerBellyHandToHerChin,
];

function App() {
    return (
        <>
            <Hero
                heroImgSrc={heroImg} 
                heroImgAlt='Familiebillede med Mateo som kigger på Lenora'
            >
                <h1>Fejring Af Lenora's Barnevelsignelse</h1>
                <p className='Hero-subheading'>& 2x 30 års fødselsdag</p>
            </Hero>
            <div className='container'>
                <TextImgSection
                    imgSrc={lenoraCherryDress}
                    imgAlt='Lenora i en kjole med kirsebær på'
                    position='top'
                >
                    <h2>Lenora Marie Nellie Rasmussen</h2>
                    <p>Da vi har fået en dejlig datter, ønsker vi at få hende velsignet og fejre denne begivenhed med vores nærmeste. I inviteres derfor til barnevelsignelse <strong>lørdag d. 2 november 2024</strong>.</p>
                    <p>Barnevelsignelsen afholdes <strong>kl. 11:00</strong> på <strong><a href='https://www.google.com/maps/place/Johannesskolen/@55.946597,12.3093061,15z/data=!4m2!3m1!1s0x0:0x49f6d92a99774b4c?sa=X&ved=2ahUKEwjh4ae8l7T5AhUPQPEDHT2nBCYQ_BJ6BAhqEAU' target='_blank' rel='noreferrer'>Ansgarvej 10, 3400 Hillerød</a></strong> efterfulgt af fest på samme lokation.</p>
                </TextImgSection>
                <TextImgSection
                    imgSrc={andrewAndTerese}
                    imgAlt='Andrew og Terese'
                    customClass='row-reverse'
                >
                    <h2>2x 30 års fødselsdag</h2>
                    <p>Vi er begge rundet de 30 inden for det sidste år, og ønsker i samme anledning at fejre dette med jer.</p>
                    <p>Der vil være <strong>mad og forplejning</strong> i løbet af dagen og der vil blive bestilt <strong>pizza til aftensmad</strong>, for dem der har lyst til at blive længere. Efter aftensmaden vil der være et <strong>underholdende indslag</strong>, som nok skal få gang i lattermusklerne.</p>
                </TextImgSection>
                <GallerySection
                    images={images}
                />
            </div>
            <InfoSection />
            <ParallaxImgSection />
            <Footer>
                <h3>S.U. senest <strong>d. 1 oktober 2024</strong></h3>
                <p>Meld også gerne tilbage om I bliver til aftensmad og hygge.</p>
                <p>Vi glæder os til at se jer!</p>
            </Footer>
        </>
    );
}

export default App;