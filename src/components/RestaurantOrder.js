import React, { useState, useEffect } from 'react';

const RestaurantOrders = ({ orderData }) => {
  const [orderStatus, setOrderStatus] = useState({});

  useEffect(() => {
    // Assuming that the orderData includes information about order confirmation
    const updatedOrderStatus = {};
    orderData.forEach(order => {
      order.order_data.flat().forEach(item => {
        if (item.orderConfirmation) {
          updatedOrderStatus[`${order._id}_${item.id}`] = 'approved';
        }
      });
    });
    setOrderStatus(updatedOrderStatus);
  }, [orderData]);

  const handleApprove = async (orderId, foodId) => {
    try {
      await fetch('http://localhost:4000/api/updateOrderConfirmation', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId, foodId }),
      });

      setOrderStatus(prevStatus => ({
        ...prevStatus,
        [`${orderId}_${foodId}`]: 'approved',
      }));
    } catch (error) {
      console.error('Error approving order:', error);
      // Handle error (e.g., show an error message)
    }
  };

 

  return (
    <div>
      {orderData.map(order => (
        <div key={order._id}>
          <h4>User Email: {order.email}</h4>
          {order.order_data.flat().map(item => (
            <div className="card mt-3" style={{ width: "16rem", maxHeight: "460px" }} key={orderData._id}>
              <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}                {orderStatus[`${order._id}_${item.id}`] !== 'approved' && ( 
                      <button className={`btn btn-success justify-center ms-2`} onClick={() => handleApprove(order._id, item.id)}>Approve</button>
                    )}
                  {orderStatus[`${order._id}_${item.id}`] === 'approved' && <div className="text-success mt-2">Order Approved</div>} </h5>
  
                <div className='container w-100 p-0' style={{ height: "38px" }}>
                  <div className='container w-100 p-0' style={{ height: "38px" }}>Item Size: {item.size}, Item Quantity: {item.qty}Price: {item.price}</div>
 
     
                </div> 
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantOrders;
