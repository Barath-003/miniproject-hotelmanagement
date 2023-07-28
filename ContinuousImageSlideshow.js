
// import React, { useState, useEffect } from 'react';
// import './ContinuousImageSlideshow.css';

// const images = ['', '', '', '']; 

// const ContinuousImageSlideshow = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const changeImage = () => {
//       setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
//     };

//     const interval = setInterval(changeImage, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="slideshow-container">
//       <img
//         className="slideshow-image"
//         src={images[currentImageIndex]}
//         alt={`Slideshow Image ${currentImageIndex + 1}`}
//       />
//     </div>
//   );
// };

// export default ContinuousImageSlideshow;
