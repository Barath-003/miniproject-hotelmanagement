import React from 'react';
import './PhotoCollage.css';

const photos = [
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/197811269.jpg?k=74a6120c10678675dba37b1068f0fb06ef2213aaf25fe9e0972244a3f0ec7f50&o=&hp=1',
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/220080126.jpg?k=2398384c40724d03db72f44841ca9bdb2a4b7a8fd2ba4b6a1ead0d8b1d60c5a7&o=&hp=1',
  
  'https://cf.bstatic.com/xdata/images/hotel/max1024x768/197811853.jpg?k=fcf2f051c3278ee6a64ad33f17ed3dfcab6ca0764ab3b49a94ac3183c0b4f78c&o=&hp=1',
  // Add more photo URLs here
];

const PhotoCollagess = () => {
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

export default PhotoCollagess;