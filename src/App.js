import './App.css'
import Dashboard from './Dashboard';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Leaderboard from './components/Leaderboard'
import Videos from './components/Videos'
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link, Routes
} from "react-router-dom";
import Filters from './components/Filters';
import Create from './components/Create';
import Rewards from './components/Rewards';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/leaderboard' element={<Leaderboard/>} />
      <Route path='/videos' element={<Videos/>} />
      {/* <Route path='/rewards' element={<Leaderboard/>} /> */}
      {/* <Route path='/create' element={<Dashboard/>} /> */}
      <Route path='/filters' element={<Filters/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/rewards' element={<Rewards/>} />
      <Route path='/signup' element={<SignUp/>} />
      {/* <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>} />
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} /> */}
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    
  </div>
    
    </>
  );
}

export default App;
