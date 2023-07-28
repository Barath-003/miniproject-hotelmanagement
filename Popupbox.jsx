import React, { useState } from 'react';
import './PopUpBox.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const PaymentSuccessfulPage = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleOpenPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="payment-successful-page">
      <h1 className='pa'>Payment Successful!</h1>
      <h2>Thank you for your payment!</h2>
     <Link to="/Main"><button onClick={handleOpenPopUp}>OK</button></Link>

      
    </div>
  );
};

export default PaymentSuccessfulPage;
