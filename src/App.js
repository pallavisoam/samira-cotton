import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/header/index'
import'./App.css'
import Footer from './components/footer';
import OurProducts from './pages/OurProducts';

function App() {
  return (
    <React.Fragment>
       <Router>
      <Header />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/our-products" element = {<OurProducts />}/>
      </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
