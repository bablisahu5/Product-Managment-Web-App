import React from 'react';
import { useParams } from 'react-router-dom';
import './ShopCategory.css';
import Item from '../Components/Item/Item';

const products = [
  { id: 1, name: 'Shirt', category: 'men', price: 40, image: '...' },
  { id: 2, name: 'Dress', category: 'women', price: 60, image: '...' },
  { id: 3, name: 'Jeans', category: 'men', price: 50, image: '...' },
  { id: 4, name: 'Skirt', category: 'women', price: 30, image: '...' },
  { id: 5, name: 'Kid Hoodie', category: 'kid', price: 25, image: '...' },
];

const ShopCategory = ({ category }) => {
  const filteredProducts = products.filter((item) => item.category === category);

  return (
    <div className="shop-category">
      <h2>{category.toUpperCase()} Category</h2>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Item
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
