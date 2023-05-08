import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from './../Shoe.json';
const ProductItem = () => {
  const { id } = useParams();
  const { img, name } = Shoe[id];
  return (
    <div>
      <h1>Welcome To Product Item</h1>
      <h3>{name}</h3>
      <img src={img} alt="image" width={150} />
    </div>
  )
}

export default ProductItem
