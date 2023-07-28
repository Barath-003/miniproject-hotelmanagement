import './App.css';

import Main from './Main';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Flights from './Flights';
import ReviewPage from './ReviewPage';
import PhotoCollage from './PhotoCollage';
import RoomBooking from './RoomBooking';
import Menu from './Menu';
import Activities from './Activities';
import Popupbox from './Popupbox';
import Room from './Room';
import User from './User';
import Payment from './Payment';
import Logo from './Logo';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import AdminPage from './AdminPage';
import RoomBookingPage from './RoomBookingPage';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/Popupbox"element={<Popupbox/>}/>
        <Route path="/Activities"element={<Activities/>}/>
        <Route path="/RoomBookingPage"element={<RoomBookingPage/>}/>
        <Route path="/RoomBooking"element={<RoomBooking/>}/>
        <Route path="/"element={<Logo/>}/>
        <Route path="/PhotoCollage"element={<PhotoCollage/>}/>
        <Route path="/SigninPage"element={<SigninPage/>}/>
        <Route path="/SignupPage"element={<SignupPage/>}/>
        <Route path="/User"element={<User/>}/>
        <Route path="/AdminPage"element={<AdminPage/>}/>
        <Route path="/Menu"element={<Menu/>}/>
        <Route path="/Flights"element={<Flights/>}/>
        <Route path="/Room"element={<Room/>}/>
        <Route path="/Payment"element={<Payment/>}/>

        <Route exact path="/Main"element={<Main/>}/>
        <Route path="/ReviewPage"element={<ReviewPage/>}/>
        
      </Routes>
    </Router>
  );
}
export default App;