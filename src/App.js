import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/header/index'
import'./App.css'
import Footer from './components/footer';
import OurProducts from './pages/OurProducts';
import Certificates from './pages/Certificates';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <React.Fragment>
       <Router>
        <ScrollToTop /> 
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/our-products" element = {<OurProducts />}/>
        <Route path="/certification" element={<Certificates />} />
      </Routes>
      <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
