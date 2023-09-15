import React from 'react';
import { Context } from "./context/Context";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart';
import Home from './pages/home';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Context>
        <Router>
          <Navbar />

          <Routes> 
            <Route path='/GoCartz' element={<Home />} />
            <Route path='/GoCartz/likes' element={<Home />} />
            <Route path='/GoCartz/cart' element={<Cart />} />
            <Route path='/GoCartz/user' element={<Home />} />
          </Routes>

          <Footer />
        </Router>
      </Context>
    </div>
  );
}

export default App;
