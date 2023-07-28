import React from 'react';
import './PhotoCollage.css';

const photos = [
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/220080101.jpg?k=e34330ccbe6b99d8b92f84557ff1bf58dc991afc85957651284a282bc380d4eb&o=&hp=1',
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/220080118.jpg?k=fd856da11e10194807d2a64c0a9f0b67ae54be850ce2cd56a02a2a51d44fec4d&o=&hp=1',
  
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/220079295.jpg?k=1e3d9ed100a8915e945afec39b292795529cbc924eb67a446d5878ebeb249a82&o=&hp=1',
  // Add more photo URLs here
];

const PhotoCollages = () => {
  return (
    <div className="photo-collage">
      {photos.map((photo, index) => (
        <Photo key={index} src={photo} />
      ))}
    </div>
  );
};

const Photo = ({ src }) => {
  return <img className="photo" src={src} alt="Collage" />;
};

export default PhotoCollages;