import React, { useState } from 'react';
import './Payment.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Payment = () => {
  const [card_number, setCardNumber] = useState('');
  const [card_holder, setCardHolder] = useState('');
  const [expiry_date, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const handlePayment = (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const data = {
      card_Number: card_number,
      card_Holder: card_holder,
      expiry_Date: expiry_date,
      cvv: cvv,
    };

    axios
      .post('http://localhost:8082/api/v1/user/paypost', data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

   
    navigate('/Popupbox');
  };

  const validateInputs = () => {
   
    if (!card_holder.trim()) {
      setError('Cardholder name is required.');
      return false;
    }

    // Validate card number
    if (!/^\d{16}$/.test(card_number)) {
      setError('Invalid card number. Please enter a 16-digit card number.');
      return false;
    }

    setError('');
    return true;
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <form className="payment-form" onSubmit={handlePayment}>
      <h1>Payment</h1>
      <div className="card">
        <label>
          Card Number:
          <input
            type="text"
            value={card_number}
            onChange={handleCardNumberChange}
            maxLength={16}
            required
          />
        </label>
        <label>
          Card Holder:
          <input
            type="text"
            value={card_holder}
            onChange={handleCardHolderChange}
            required
          />
        </label>
        <div className="expiry-cvv-container">
          <label>
            Expiry Date:
            <input
              type="text"
              value={expiry_date}
              onChange={handleExpiryDateChange}
              maxLength={5}
              required
            />
          </label>
          <label>
            CVV:
            <input
              type="text"
              value={cvv}
              onChange={handleCvvChange}
              maxLength={3}
              required
            />
          </label>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="buttn">
        <button type="submit">Pay Now</button>
      </div>
    </form>
  );
};

export default Payment;
