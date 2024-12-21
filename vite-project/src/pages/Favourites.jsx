import React from 'react';
import './FavouritesHeader.css';

const Favourites = () => {
  return (
    <div className="favourites-container">
      <header className="favourites-header">
        <h1>Favourites</h1>
        <p>Your favorite products are waiting for you!</p>
      </header>
      <div className="favourites-content">
        <section className="favourite-items">
          <h2>Your Favourites</h2>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Item 1" />
            <h3>Product Name 1</h3>
            <p>Price: $49.99</p>
          </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Item 2" />
            <h3>Product Name 2</h3>
            <p>Price: $29.99</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Favourites;
