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
        <div className="row" key={order._id}>
          <div className='text-right mb-3'>
          <h5 className='text-right'>User Email: <span className="badge text-bg-primary">{order.email}</span></h5>
          </div>
          {order.order_data.flat().map(item => (
            <div className='col-md-3'>
              <div className="card mb-3 card-product" key={orderData._id}>
                <img src={item.img} className="card-img-top" alt="{item.name}" style={{height:"170px", objectFit:"cover"}}  />
                <div className="card-body">
                  <h5 className="card-title text-center"><div>{item.name} </div>               {orderStatus[`${order._id}_${item.id}`] !== 'approved' && (
                    <button className={`btn btn-success justify-center ms-2`} onClick={() => handleApprove(order._id, item.id)}>Approve</button>
                  )}
                    {orderStatus[`${order._id}_${item.id}`] === 'approved' && <div className="badge text-bg-success mt-2">Order Approved</div>} </h5>

                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><span>Quantity:</span> <em> {item.qty}</em></li>
                      <li class="list-group-item"><span>Size:</span> <em> {item.size}</em></li>
                      <li class="list-group-item"><span>Price:</span> <em> {item.price}</em></li>
                      {/* <li class="list-group-item"><span>Status:</span> <em>{item.orderConfirmation ? <span className='text-success'>  Accepted </span> : <span className='text-danger'>  Pending </span>}</em></li> */}
                    </ul>
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
