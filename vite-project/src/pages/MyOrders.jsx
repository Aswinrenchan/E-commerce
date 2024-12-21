import React from 'react';
import './MyOrdersHeader.css';

const MyOrders = () => {
  return (
    <div className="my-orders-container">
      <header className="my-orders-header">
        <h1>My Orders</h1>
        <p>Track your gym supplement orders and more!</p>
      </header>
      <div className="my-orders-content">
        <section className="order-history">
          <h2>Your Order History</h2>
          <div className="order-item">
            <img src="https://via.placeholder.com/150" alt="Protein Order" />
            <h3>Whey Protein - 2kg</h3>
            <p>Price: $49.99</p>
            <p>Status: Shipped</p>
            <button>Track Order</button>
          </div>
          <div className="order-item">
            <img src="https://via.placeholder.com/150" alt="BCAA Order" />
            <h3>BCAA - 300g</h3>
            <p>Price: $29.99</p>
            <p>Status: Delivered</p>
            <button>Track Order</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyOrders;
