
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import './RoomBookingPage.css';

const RoomBookingPage = () => {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState('Single');
  const [numRooms, setNumRooms] = useState(1);
  const [numPersons, setNumPersons] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '' && checkInDate && checkOutDate) {
      if (roomType === 'Single' || roomType === 'Double' || roomType === 'Suite') {
        alert('Booking submitted successfully!');
        setName('');
        setRoomType('Single');
        setNumRooms(1);
        setNumPersons(1);
        setCheckInDate('');
        setCheckOutDate('');

        // Navigate to the Payment page using useNavigate
        navigate('/Payment');
      } else {
        alert('Please select a valid room type.');
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const handleNumRoomsChange = (e) => {
    setNumRooms(e.target.value);
  };


  return (
    <div className="room-booking-page">
      <h1>Book Now</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
          <label htmlFor="numRooms">Number of Rooms:</label>
          <select id="numRooms" value={numRooms} onChange={handleNumRoomsChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <label htmlFor="numPersons">Number of Persons:</label>
          <input
            type="number"
            id="numPersons"
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
            min="1"
          />
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        <button type="submit">Book</button>
        </form>
      </div>
    </div>
  );
};

export default RoomBookingPage;
