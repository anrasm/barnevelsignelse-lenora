import React from 'react';
import './GallerySection.css';

const GallerySection = ({images}) => {
  return (
    <div className='Gallery'>
      {images.map((image, index) => (
        <div className='Gallery-item' key={index}>
          <img src={image} alt={`Galleri billede ${index + 1}`}/>
        </div>
      ))}
    </div>
  );
};

export default GallerySection;
