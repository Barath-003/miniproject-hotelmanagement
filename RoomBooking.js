import React from 'react';
import './RoomBooking.css';
import { Link } from 'react-router-dom';
import PhotoCollage from './PhotoCollage';
import PhotoCollages from './PhotoCollages';
import PhotoCollagess from './PhotoCollagess';
const offers = [
  {
    id: 1,
    title: 'Children BedRoom',
    description: 'Enjoy a relaxing summer vacation at our luxurious hotel.',
    imageUrl: 'https://t3.ftcdn.net/jpg/00/71/44/80/240_F_71448031_v7XfJdtUsA4P61GNpPGFOShJ6weZlcIW.jpg'
  },
  {
    id: 2,
    title: 'Master BedRoom',
    description: 'Affordable and comfortable for a pleasant stay.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/220080252.jpg?k=b1d0b623b4b78fc4b326a6d580d9c35d88fc170fbc98286a4b15ec3f740c528d&o=&hp=1'
  },
  {
    id: 3,
    title: 'Guest Bedroom',
    description: 'Indulge in luxury with our exclusive penthouse suite.',
    imageUrl: 'https://t3.ftcdn.net/jpg/00/79/80/90/240_F_79809038_ZiEwKUIit7VH6DZcumW5A0VyUcICTkus.jpg'
  },
];

const RoomBooking = () => {
  const handleViewClick = (offerId) => {
    // Implement the logic to handle the view button click for the corresponding offer
    console.log(`View clicked for offer with ID: ${offerId}`);
  };

  const handleSubmitClick = (offerId) => {
    // Implement the logic to handle the submit button click for the corresponding offer
    console.log(`Submit clicked for offer with ID: ${offerId}`);
  };
  

  return (
    <>
    <div className='backimg11'>
    {/* <div className='backimg11'> */}
    <div className="offers-container">
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-price">{offer.price}</p>
          <div className="offer-buttons">
            {/* <button onClick={() => handleViewClick(offer.id)}>View</button>
            <button onClick={() => handleSubmitClick(offer.id)}>Book</button> */}
          </div>
        </div>
      ))}
    </div>
      <div className='empty'>Children BedRoom Images:</div><br></br>
      <PhotoCollage/>
      <div className='empty'>Master BedRoom Images:</div><br></br>
      <PhotoCollages/>
      <div className='empty'>Guest BedRoom Images:</div><br></br>
      <PhotoCollagess/>
    </div>
    
    </>
  );
};

export default RoomBooking;