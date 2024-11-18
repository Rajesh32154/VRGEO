import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Innovation from './pages/Innovation/Innovation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Productdetails from './pages/Products/Productdetails';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products-applictions" element={<Productdetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/innovation" element={<Innovation />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
