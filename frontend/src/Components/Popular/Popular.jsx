
import React from 'react';
import './Popular.css';
import Item from '../Item/Item';
const allItems = [
  {
    id: 1,
    name: 'Floral Dress',
    image: 'https://images.unsplash.com/photo-1520975600443-cf7cdef22332?auto=format&fit=crop&w=400&q=80',
    price: 49.99,
    category: 'women',
  },
];

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-items">
        {allItems.map(item => (
          <Item key={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
