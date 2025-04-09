import React from 'react';
import './Item.css';

const Item = ({ image, name, price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name} className='item-image' />
      <div className='item-details'>
        <p className='item-name'>{name}</p>
        <div className='item-prices'>
          <div className='item-price-new'>₹{price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
