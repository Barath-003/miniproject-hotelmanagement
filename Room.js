// Offers.js
import React from 'react';
import './Room.css';
import { Link, Router } from 'react-router-dom';
const offers = [
  {
    id: 1,
    title: 'Summer Getaway',
    description: 'Enjoy a relaxing summer vacation at our luxurious hotel.',
    price: '$199',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=a951251a01349f4b02c25e132c08adf5a0f2d60a-9098096-images-thumbs&n=13'
  },
  {
    id: 2,
    title: 'Standard Room',
    description: 'Affordable and comfortable for a pleasant stay.',
    price: '$100',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=c4de400821413a9c0680822a9e80e278-4552854-images-thumbs&n=13'
  },
  {
    id: 3,
    title: 'Penthouse Suite',
    description: 'Indulge in luxury with our exclusive penthouse suite.',
    price: '$350',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=b34031e85c200ef345e9ffdd21e68644c82ca586-9229079-images-thumbs&n=13'
  },
  {
    id: 4,
    title: 'Ocean View Villa',
    description: 'Experience breathtaking views in our beachfront villa.',
    price: '$250',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=4b9f5eea31051a28ae9466a0218ec5ff-5232373-images-thumbs&n=13'
  },
  {
    id: 5,
    title: 'Weekend Retreat',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$500',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=2a1501c3e9b835db9b01600d9d18b8246e1122f6-6604900-images-thumbs&n=13'
  },
  {
    id: 6,
    title: 'Cabana',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$980',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=55cafcded4ebbccdf248c96f8c5ba1c09623a65b-9985849-images-thumbs&n=13'
  },
  
  {
    id: 7,
    title: 'Lanai',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$765',
    imageUrl: 'https://www.home-designing.com/wp-content/uploads/2012/07/Panoramic-ocean-view-modern-living-room.jpeg'
  },
  
  {
    id: 8,
    title: 'Beach Resort',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$435',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=b9a999748eacebfdc2aab33e1ebf3f7c709d10f3-9161202-images-thumbs&n=13'
  },
  
  {
    id: 9,
    title: 'Motel',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$210',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=06efb01e6b875999987491321d9b8a985ab3ae3b-8411743-images-thumbs&n=13'
  },
  
  {
    id: 10,
    title: 'Retreat',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$800',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovyghYpGRC7lCN5yCvZBCeMBFWynZUovNZA&usqp=CAU'
  },
  
  
];

const Offers = () => {
  const handleViewClick = (offerId) => {
  
    console.log(`View clicked for offer with ID: ${offerId}`);
  };

  const handleSubmitClick = (offerId) => {
   
    console.log(`Submit clicked for offer with ID: ${offerId}`);
  };

  return (
    <div className="offers-container">
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-price">{offer.price}</p>
          <div className="offer-buttons">
         <Link to="/PhotoCollage"><button onClick={() => handleViewClick(offer.id)}>View</button></Link>
          <Link to="/RoomBookingPage"><button onClick={() => handleSubmitClick(offer.id)}>Book Now</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
