import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <h3>
      <Link to="/about">About</Link>
      </h3>
      <h3>
      <Link to="/product">product</Link>
      </h3>
    </div>
  )
}

export default Navbar