import React,  { useState } from 'react';

const RestaurantOrders = ({ orderData }) => {
  const [orderStatus, setOrderStatus] = useState(null);

  const handleApprove = async (orderId, foodId) => {
    try {
      await fetch('http://localhost:4000/api/updateOrderConfirmation', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId, foodId }),
      });

      setOrderStatus('approved');
    } catch (error) {
      console.error('Error approving order:', error);
      // Handle error (e.g., show an error message)
    }
  };

  const handleDeny = async (orderId, foodId) => {
    try {
      await fetch('/updateOrderConfirmation', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId, foodId }),
      });

      setOrderStatus('denied');
    } catch (error) {
      console.error('Error denying order:', error);
      // Handle error (e.g., show an error message)
    }
  };
  return (
    <div>
      {orderData.map(order => (
        <div key={order._id}>
          <h3>Email: {order.email}</h3>
          {order.order_data.flat().map(item => (
    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }} key={orderData._id}>
    <img src={item.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      {/* <p className="card-text">This is some random text. This is description.</p> */}
      <div className='container w-100 p-0' style={{ height: "38px" }}>
      <div className='container w-100 p-0' style={{ height: "38px" }}>Item Size: {item.size}</div>
      <div className='container w-100 p-0' style={{ height: "38px" }}>Item Quantity: {item.qty}</div>
        <div className=' ms-2 h-100 w-20 fs-5' >
          Price: ₹{item.price}
        </div>

      </div>
      <hr/>
      {orderStatus === null && (
                  <>
                    <button className={`btn btn-success justify-center ms-2`} onClick={() => handleApprove(order._id, item.id)}>Approve</button>
                    <button className={`btn btn-danger justify-center ms-2`} onClick={() => handleDeny(order._id, item.id)}>Deny</button>
                  </>
                )}
                {orderStatus === 'approved' && <div className="text-success mt-2">Order Approved</div>}
                {orderStatus === 'denied' && <div className="text-danger mt-2">Order Denied</div>}
      {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
    </div>
  </div>
          ))}
        </div>
      ))}
    </div>
  ); 
};

export default RestaurantOrders;