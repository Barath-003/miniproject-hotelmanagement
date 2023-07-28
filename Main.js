// Main.js
import React, { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Main.css';
import "./Style.css";
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { logout, selectUser } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; // Import Axios

const Main = () => {
  const navRef = useRef();

  // Sample placeholder locations
  const locationsData = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'London' },
    { id: 4, name: 'Tokyo' },
    { id: 5, name: 'Sydney' },
  ];

  const [locations, setLocations] = useState(locationsData);
  const [selectedLocation, setSelectedLocation] = useState('');

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    // Fetch locations from the Spring Boot backend
    axios.get('http://localhost:8080/locations')
      .then(response => {
        setLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching locations:', error);
      });
  }, []);

  const handleLocationSelect = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div>
      <header>
        <div className='logo'>
          <div className='png1'></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <nav ref={navRef}>
            <Link to="/Flights"><a href='/#'>Flights</a></Link>
            <Link to="/Activities"><a href="/#">Activities</a></Link>
            <Link to="/Room"><a href="/#">Rooms</a></Link>
            <Link to="/ReviewPage"><a href="/#">Review</a></Link>
            <Link to="/Payment"><a href="/#">Payment</a></Link>
            <div className='Boys'>
              <Link to="/SigninPage"><a href="/#">SignOut</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </nav>
          <button
            className="nav2"
            onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>
      <div className='main'>
        <div className='he'>
          <h1 className='he'>Hotel Room Booking Portal <br />"{user.name}"</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h3 className='he'>Stay once, carry memories forever.</h3>
        </div>
        <div className="search">
          <select
            value={selectedLocation}
            onChange={handleLocationSelect}
            className="search-field"
          >
            <option value="">Select a location</option>
            {locations.map(location => (
              <option key={location.id} value={location.name}>{location.name}</option>
            ))}
          </select>
        <Link to="/Room"><button className="search-button">Search</button></Link> 
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
