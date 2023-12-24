import React from 'react';

const RestaurantOrders = ({ orderData }) => {
  return (
    <div>
      {orderData.map(order => (
        <div key={order._id}>
          <h3>Email: {order.email}</h3>
          {order.order_data.flat().map(item => (
            <div key={item.id}>
              <p>Name: {item.name}</p>
              <p>Quantity: {item.qty}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.price}</p>
              {/* Add additional information as needed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  ); 
};

export default RestaurantOrders;