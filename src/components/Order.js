import React from 'react';

const  Order = ({ orderData }) => {
  // Extract relevant data from orderData
  const { _id, email, order_data } = orderData;

  return (
    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
     {order_data.map((itemGroup, index) => (
      <div className="card-body"> 

        
          <div key={index} className="list-group mb-3">
            {itemGroup.map((item) => (
              <div key={item.id} className="list-group-item">
                <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                <p>Name: {item.name}</p>
                <p>Quantity: {item.qty}</p>
                <p>Size: {item.size}</p>
                <p>Price: {item.price}</p>
                <p>Status: {item.orderConfirmation ? <p className='text-success'>  Accepted </p> : <p className='text-danger'>  Pending </p>}</p>
              </div>
            ))}
          </div>

          
      
      </div>  ))}
      <div>

      
    </div>
    </div>
  );
};

export default Order;
