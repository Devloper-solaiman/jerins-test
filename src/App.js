import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import Dashbord from './Pages/Dashbord/Dashbord/Dashbord';
import Booking from './Pages/Dashbord/Booking/Booking';
import BookingList from './Pages/Dashbord/BookingList/BookingList';
import Review from './Pages/Dashbord/Review/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='dashbord' element={<Dashbord></Dashbord>}>

          <Route index element={<Booking></Booking>}></Route>
          <Route path='bookinglist' element={<BookingList></BookingList>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
