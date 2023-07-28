// import React, { useState,useEffect } from 'react';
// import './Signin.css';
// import { login } from "./UserSlice";
// import axios from 'axios'


// import {Link, useNavigate} from "react-router-dom"

// const SigninPage = () => {


//   const[user,setUser]=useState({});
  

//   const navigate=useNavigate();
//   const [username,setUsername]=useState("");
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
  
//   // const [email, setEmail] = useState('')

//   const handleSubmit= async (e)=>{
//     e.preventDefault();
    
//   try{
//     const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
//         "name":username,
//         "password":password
//     });
//     navigate('/Home');
//     let token=response.data.token;
//     let user=response.data.id;
//     localStorage.setItem('token',token);
//     localStorage.setItem('user',JSON.stringify(user));
// }
// catch(error){
//     window.alert("Incorrect Username or Password !!!");
// }
// }
    
//   return (
//         <div className='logo'>
      
//     <div className="login-page">
      
//     <div className="login1-page">
//       <div className="login-container">
//         <h2>Sign In</h2>
//         <p className='ab'>.....................................................................................</p>
//         <pre><Link to="/"><button className="btn-1">Admin</button></Link><Link to="/Signin1"><button className="btn-2">User</button></Link></pre>
//         <br/>
//         <form onSubmit={handleSubmit}>
//             <h4 className='a'>Username:</h4>
//           <input className='logininput'
//           type="text"
//           value={username}
//           name="username"
//           onChange={(event) => setUsername(event.target.value)} 
//           placeholder="Enter your Username"
//           required/> 

// {/* <label name="username">USERNAME</label>
//        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/> */}

//           <h4 className='a'>Password:</h4>  
//           <input className='logininput' 
//           type="password" 
//           value={password}
//           name="password" 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Enter your Password" 
//           required/>

//            <button onSubmit={(e) => handleSubmit(e) } className='but' type="submit">Login</button>
//           <h3>------------- or -------------</h3>
//           <center><div className="google" id='signInDiv' ></div></center><br/>
//         </form>
//           <br/><h4 className='ad'>New User?</h4>
//           <div className="create"><Link to="/Signup"><div className="b"><u>Create New Account</u></div></Link></div>  
//           </div>
//       </div>
//       <div>
//     </div>
//     </div></div>
    
//   );
// };

// export default SigninPage;