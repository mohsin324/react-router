import React from 'react'
import { Link } from 'react-router-dom';
import Shoe from './../Shoe.json';
import ProductItem from './ProductItem';
const Product = () => {
  return (
    <div>
      <h1>Product Store</h1>
      {
        Object.keys(Shoe).map((keyName) => {
          const { name, img } = Shoe[keyName]; 
          return(
            <Link key={keyName} to={`/product/${keyName}`}>
              <h3>{name}</h3>
              <img src={img} width='100px' height='100px' alt='Shoe Image' />
            </Link>
            
          )
        })
      }

    </div>
  )
}

export default Product