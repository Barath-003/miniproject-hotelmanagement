import React from 'react'
import './Logo.css';
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Logo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/SigninPage");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <>
    <div className="bb">
        <h1>Welcome to</h1>
      </div>
     <div className="log">
    </div>
    </>
  )
}

export default Logo