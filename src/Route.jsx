import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import components
import Home from './Component/Home';
import Product from './Component/Product';
import ProductItem from './Component/ProductItem';
import About from './Component/About';
// navbar
import Navbar from './Component/Navbar';

const Routers = () => {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' Component={Home} />
                <Route path='/product' Component={Product} />
                <Route path='/product/:id' Component={ProductItem} />
                <Route path='/about' Component={About} />
            </Routes>
        </Router>
    </div>
  )
}

export default Routers;