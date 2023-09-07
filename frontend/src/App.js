import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav1 from './components/Nav';
import { Nav2 } from './components/Nav';
import Footer from './components/Footer'
import Blog from './components/Blog'
import { Newsletter } from './components/Blog'
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <Nav1 />
      <Nav2 />

      <AllProducts />
      
      <Blog />
      <Newsletter />
      <Footer />
    </div>

  );
}

export default App;
