import React from 'react';
import './PhotoCollage.css';

const photos = [
  'https://c1.wallpaperflare.com/preview/57/35/620/children-room-newborn-the-cradle-for-baby.jpg',
  'https://c1.wallpaperflare.com/preview/633/70/475/children-search-interior-solutions-design-interior.jpg',
  
  'https://c4.wallpaperflare.com/wallpaper/972/840/839/toys-furniture-interior-children-s-room-hd-wallpaper-preview.jpg',
  
];

const PhotoCollage = () => {
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

export default PhotoCollage;