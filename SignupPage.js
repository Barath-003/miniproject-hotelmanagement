import React, { useState } from 'react';
import './Signup.css';
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'



const SignupPage = () => {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    
    const navigate=useNavigate();

    const checkPassword = (e) =>{
      const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        window.alert(
          "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        );
        initialize1()
        return;
      }
      else if (password !== confirmpassword) {
        window.alert("Passwords do not match.");
        initialize2()
        return;
      }
      else{
        window.alert("Registration Successful !!!");
      }
    }
    const initialize1 = () =>{
      setPassword('')
      setConfirmPassword('')
    }
    const initialize2 = () =>{
      setConfirmPassword('')
    }
  
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };

    const handleSubmit= async (e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://127.0.0.1:8081/api/v1/auth/register",
          {
            name,
            email,
            mobile,
            password,
            // confirmpassword,
          },
        );
  
        console.log("Sign in successful");
        console.log(response.data); 
        navigate('/');
  
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
  
      }
  }
    
  return (
    <div className='logo1'>
    <div className="signup-page"> 
    <div className="signup1-page">
      <div className="signup-container">
      <h2>Create Your Account</h2>
      <p className='ab1'>................................................................</p>
         <form onSubmit={handleSubmit}>
         <h4 className='a1'>Username:</h4>
           <input
            type="text"
            className='signupinput'
            placeholder="Enter your Name"
            value={name}
            onChange={handleNameChange}
            required
          />

        <h4 className='a1'>Email:</h4>
         <input
            type="email"
            className='signupinput'
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <h4 className='a1'>Mobile No:</h4>
          <input
            type="tel"
            className='signupinput'
            pattern="\d{10}$"
            title="Mobile no. must contain 10 Numbers"
            placeholder="Enter your Mobile Number"
            value={mobile}
            onChange={handleMobileChange}
            required
          />

          <h4 className='a1'>Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <h4 className='a1'>Confirm Password:</h4>
          <input
            type="password"
            className='signupinput'
            placeholder="Re Enter New Password"
            value={confirmpassword}
            onChange={handleConfirmPasswordChange}
            required
          /><br/>
          <button type="submit" onClick={checkPassword} className='signupbutton'><b>Sign Up</b></button>
            <h3>------------- or -------------</h3>
        </form>
        <h4 className='a1'>Existing User?</h4>
          <div className="create1"><Link to="/SigninPage"><div className="b1"><u>Log Into Your Account</u></div></Link></div>  
          </div>
      </div>
    </div>
    
    </div>
  );
};

export default SignupPage;